import { useRef, useState } from "react";

import * as Yup from "yup";
import { withFormik, Form } from "formik";

import Button from "/components/controls/Button";
import TextField from "/components/controls/TextField";

import TrialSummary from "./TrialSummary";
import TrialFollowupForm from "./TrialFollowupForm";

let submissionStatus = "unconfigured";

function onSubmit(values, actions) {
  submissionStatus = "configured";
  actions.setSubmitting(false);
}

const ConfigForm = (props) => {
  const { values, touched, errors, isSubmitting } = props;

  const [reconfiguring, setReconfiguring] = useState(false);

  function checkFollowup(submissionStatus) {
    if (
      Object.keys(errors).length !== 0 ||
      submissionStatus === "unconfigured" ||
      reconfiguring
    ) {
      return false;
    } else return true;
  }

  const configButtonRef = useRef(null);
  const backButtonRef = useRef(null);

  // config submit button
  function handleConfirmConfigure() {
    if (Object.keys(errors).length === 0) {
      setReconfiguring(false);
      submissionStatus = "configured";
      setTimeout(() => backButtonRef.current.focus(), 1); // wait till not disabled
    }
  }

  // back button
  function handleReconfigure() {
    setReconfiguring(true);
    submissionStatus = "reconfiguring";
    setTimeout(() => configButtonRef.current.focus(), 1);
  }

  return (
    <div className="trial-config">
      <Form
        className={`trial-config-form trial-card darkglass u-mh-auto u-mb-md is-${
          checkFollowup(submissionStatus) ? "hidden" : "visible"
        }`}
        name="Andalusia-website contact form"
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
          disabled={checkFollowup(submissionStatus)}
        />
        <TextField
          name="cpuPerNode"
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
          disabled={checkFollowup(submissionStatus)}
        />
        <TextField
          name="gpuPerNode"
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
          disabled={checkFollowup(submissionStatus)}
        />
        <TextField
          name="ramPerNode"
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
          disabled={checkFollowup(submissionStatus)}
        />
        <TextField
          name="storagePerNode"
          labelText="Storage / node"
          placeholder="1+ TB / node"
          helpText="Max 100 TB / node"
          type="number"
          min="0.25"
          max="100"
          step="0.25"
          fontSize="md"
          touched={touched}
          errors={errors}
          disabled={checkFollowup(submissionStatus)}
        />
        <Button
          className="trial-followup-form-button"
          fontSize="md"
          fill
          type="submit"
          disabled={isSubmitting || checkFollowup(submissionStatus)}
          onClick={() => handleConfirmConfigure()}
          refs={configButtonRef}
        >
          Start free 3 month trial
        </Button>
      </Form>

      <TrialSummary
        values={values}
        backButtonIsVisible={checkFollowup(submissionStatus)}
        backButtonRef={backButtonRef}
        onReconfigure={() => handleReconfigure()}
      />

      <TrialFollowupForm
        values={values}
        isVisible={checkFollowup(submissionStatus)}
      />
    </div>
  );
};

const TrialConfig = withFormik({
  mapPropsToValues: (props) => {
    return {
      nodes: props.nodes || "",
      cpuPerNode: props.cpuPerNode || "",
      gpuPerNode: props.gpuPerNode || "",
      ramPerNode: props.ramPerNode || "",
      storagePerNode: props.storagePerNode || "",
    };
  },
  validationSchema: Yup.object().shape({
    nodes: Yup.number().integer().required("Required"),
    cpuPerNode: Yup.number().integer().required("Required"),
    gpuPerNode: Yup.number().integer().required("Required"),
    ramPerNode: Yup.number().integer().required("Required"),
    storagePerNode: Yup.number().required("Required"),
  }),
  handleSubmit: (values, actions) => onSubmit(values, actions),
})(ConfigForm);

export default TrialConfig;
