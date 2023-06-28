import { useEffect } from "react";

import * as Yup from "yup";
import { withFormik, Form } from "formik";

import submissionMessage from "/content/submissionMessage.js";
import encode from "/helpers/encode.js";

import DefaultLayout from "/components/layout/DefaultLayout";

import TrialFollowupForm from "/pages/enterprise-trial/TrialFollowupForm";

let submissionStatus = null;

function onSubmit(values, actions) {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "Andalusia-website contact form",
      ...values,
    }),
  })
    .then(() => (submissionStatus = "success"))
    .catch(() => (submissionStatus = "fail"))
    .finally(() => actions.setSubmitting(false));
}

const TheForm = (props) => {
  const { touched, errors, isSubmitting } = props;

  useEffect(() => (submissionStatus = null));

  return (
    <DefaultLayout slug="hosted-test">
      <section className="fullscreen-section contact-section">
        <h1 className="u-text-c u-title">
          {submissionMessage[submissionStatus]?.title ||
            "Hosted test request"}
        </h1>

        {submissionStatus ? (
          <div className="contact-form u-mh-auto u-mb-md">
            <p className="u-font-xl u-text-c">
              {submissionMessage[submissionStatus]?.body}
            </p>
          </div>
        ) : (
          <Form
            className="hosted-test-form u-mh-auto"
            name="Andalusia-website hosted test request form"
            data-netlify={true}
          >
            <TrialFollowupForm
              isVisible={true}
              touched={touched}
              errors={errors}
              isSubmitting={isSubmitting}
              showTermsToggle={false}
            />
          </Form>
        )}
      </section>
    </DefaultLayout>
  );
};

const HostedTest = withFormik({
  mapPropsToValues: (props) => {
    return {
      name: props.name || "",
      company: props.company || "",
      role: props.role || "",
      email: props.email || "",
      location: props.location || "",
      terms: props.terms || false,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Required"),
    company: Yup.string().required("Required"),
    role: Yup.string(),
    email: Yup.string().email("Invalid").required("Required"),
    location: Yup.string().required("Required"),
    terms: Yup.bool().oneOf([true], "Please agree to the terms"),
  }),
  handleSubmit: (values, actions) => onSubmit(values, actions),
})(TheForm);

export default HostedTest;
