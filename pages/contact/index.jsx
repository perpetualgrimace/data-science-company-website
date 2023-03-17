import { useEffect } from "react";

import * as Yup from "yup";
import { withFormik, Form } from "formik";

import DefaultLayout from "/components/layout/DefaultLayout";

import Button from "/components/controls/Button";
import TextField from "/components/controls/TextField";

import EllipsisIcon from "/components/icons/EllipsisIcon";
import SendIcon from "/components/icons/SendIcon";

const submissionMessage = {
  success: {
    title: "Your message was sent",
    body: "We’ll get back to you shortly",
  },
  fail: {
    title: "Something went wrong",
    body: "Our apologies. Please email us directly at contact@andalusia.ai",
  },
};

const encode = (data) => {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
};

let submissionStatus = null;

function onSubmit(values, actions) {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "Andalusia-website contact page",
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
    <DefaultLayout slug="contact">
      <section className="fullscreen-section contact-section">
        <h1 className="u-text-c u-title">
          {submissionMessage[submissionStatus]?.title || "Contact us"}
        </h1>

        {submissionStatus ? (
          <div className="contact-form u-mh-auto u-mb-md">
            <p className="u-font-xl u-text-c">
              {submissionMessage[submissionStatus]?.body}
            </p>
          </div>
        ) : (
          <>
            <Form
              className="contact-form darkglass u-mh-auto u-mb-md"
              data-netlify={true}
            >
              <TextField
                labelText="Your name"
                placeholder="Firstname Lastname"
                name="name"
                fontSize="md"
                touched={touched}
                errors={errors}
                autoFocus={true}
              />

              <TextField
                labelText="Email address"
                placeholder="your@emailaddress.com"
                name="email"
                fontSize="md"
                touched={touched}
                errors={errors}
              />

              <TextField
                labelText="How can we help?"
                placeholder=" "
                name="message"
                fontSize="md"
                touched={touched}
                errors={errors}
                as="textarea"
              />

              <Button
                className="contact-form-button"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <EllipsisIcon /> Sending email
                  </>
                ) : (
                  <>
                    <SendIcon /> Send message
                  </>
                )}
              </Button>
            </Form>

            <address className="contact-address u-font-sm u-text-c">
              Dubai Media City, Office 300, Building 5, Dubai, UAE
            </address>
          </>
        )}
      </section>
    </DefaultLayout>
  );
};

const Contact = withFormik({
  mapPropsToValues: (props) => {
    return {
      name: props.name || "",
      email: props.email || "",
      message: props.message || "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Invalid").required("Required"),
    name: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    // email: Yup.string(),
    // name: Yup.string(),
    // message: Yup.string(),
  }),
  handleSubmit: (values, actions) => {
    // setTimeout(() => {
    onSubmit(values, actions);
    // setSubmitting(false); // only needed if synchronous
    // }, 1000);
  },
})(TheForm);

export default Contact;
