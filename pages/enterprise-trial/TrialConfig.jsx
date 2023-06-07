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

let submissionStatus = null;

function onSubmit(values, actions) {
  console.log(data);
  actions.setSubmitting(false);
}

const ConfigForm = (props) => {
  const { touched, errors, isSubmitting } = props;

  useEffect(() => (submissionStatus = null));

  return submissionStatus ? (
    <div className="trial-followup-form trial-card u-mh-auto u-mb-md">
      <p className="u-font-xl u-text-c">
        {submissionMessage[submissionStatus]?.body}
      </p>
    </div>
  ) : (
    <>
      <Form
        className="trial-followup-form trial-card darkglass u-mh-auto u-mb-md"
        name="Andalusia-website contact form"
        data-netlify={true}
      >
        <h2 className="u-text-c">Design your cluster</h2>

        <TextField
          name="nodes"
          labelText="Nodes"
          placeholder="4+"
          helpText="Minimum 4"
          type="number"
          min="4"
          step="1"
          suffix=" nodes"
          fontSize="md"
          touched={touched}
          errors={errors}
          autoFocus={true}
        />
        <TextField
          name="cpu-per-node"
          labelText="CPUs / node"
          placeholder="1+ / node"
          helpText="Max 16 / node"
          type="number"
          min="1"
          max="16"
          step="1"
          fontSize="md"
          touched={touched}
          errors={errors}
          autoFocus={true}
        />
        <TextField
          name="gpu-per-node"
          labelText="GPUs / node"
          placeholder="1+ / node"
          helpText="Max 16 / node"
          type="number"
          min="1"
          max="16"
          step="1"
          fontSize="md"
          touched={touched}
          errors={errors}
          autoFocus={true}
        />
        <TextField
          name="ram-per-node"
          labelText="RAM / node"
          placeholder="2+ GB / node"
          helpText="Max 64 GB / node"
          type="number"
          min="2"
          max="64"
          step="1"
          fontSize="md"
          touched={touched}
          errors={errors}
          autoFocus={true}
        />
        <TextField
          name="storage-per-node"
          labelText="Storage / node"
          placeholder="1+ TB / node"
          helpText="Max 100 TB / node"
          type="number"
          min="1"
          max="100"
          step="1"
          fontSize="md"
          touched={touched}
          errors={errors}
          autoFocus={true}
        />

        <Button
          className="trial-followup-form-button"
          fontSize="md"
          fill
          type="submit"
          disabled={isSubmitting}
        >
          Start free 3 month trial
        </Button>
      </Form>
    </>
  );
};

const TrialConfig = withFormik({
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
  }),
  handleSubmit: (values, actions) => onSubmit(values, actions),
})(ConfigForm);

export default TrialConfig;
