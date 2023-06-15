import { useEffect } from "react";

import * as Yup from "yup";
import { withFormik, Form } from "formik";

import Button from "/components/controls/Button";
import Checkbox from "/components/controls/Checkbox";
import Select from "/components/controls/Select";
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
      "form-name": "Andalusia-website enterprise trial request",
      ...values,
    }),
  })
    .then(() => (submissionStatus = "success"))
    .catch(() => (submissionStatus = "fail"))
    .finally(() => actions.setSubmitting(false));
}

const SubmitForm = (props) => {
  const { touched, errors, isSubmitting, isVisible } = props;

  useEffect(() => (submissionStatus = null));

  return (
    <Form
      className={`trial-followup-form trial-card darkglass u-mh-auto u-mb-md is-${
        isVisible ? "visible" : "hidden"
      }`}
      name="Andalusia-website contact form"
      data-netlify={true}
    >
      <h2 className="u-text-c">Start free 3 month trial</h2>

      <TextField
        labelText="Company name"
        placeholder="Your Company"
        name="company"
        fontSize="md"
        touched={touched}
        errors={errors}
        autoFocus={true}
      />
      <TextField
        labelText="Contact email address"
        placeholder="your@emailaddress.com"
        name="email"
        fontSize="md"
        touched={touched}
        errors={errors}
      />

      <Select
        labelText="Company location"
        name="location"
        touched={touched}
        errors={errors}
        options={[
          { label: "United States", value: "us" },
          { label: "Saudi Arabia", value: "sa" },
        ]}
      />

      <Checkbox
        name="accept-terms"
        touched={touched}
        errors={errors}
        labelText={
          <>
            I agree to the{" "}
            <button type="button" className="link">
              Terms of Service
            </button>
          </>
        }
      />

      <Button
        className="trial-followup-form-button"
        fontSize="md"
        fill
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <EllipsisIcon /> Submitting trial request
          </>
        ) : (
          <>
            <SendIcon /> Submit trial request
          </>
        )}
      </Button>
    </Form>
  );
};

const TrialFollowupForm = withFormik({
  mapPropsToValues: (props) => {
    return {
      company: props.company || "",
      email: props.email || "",
      location: props.location || "us",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Invalid").required("Required"),
    name: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
  }),
  handleSubmit: (values, actions) => onSubmit(values, actions),
})(SubmitForm);

export default TrialFollowupForm;
