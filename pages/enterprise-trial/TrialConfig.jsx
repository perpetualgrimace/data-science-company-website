import { useRef, useEffect, useState } from "react";

import * as Yup from "yup";
import { withFormik, Form } from "formik";

import submissionMessage from "/content/submissionMessage.js";
import encode from "/helpers/encode.js";

import Button from "/components/controls/Button";
import TextField from "/components/controls/TextField";

import checkTrialConfig from "./checkTrialConfig.js";
import TrialSummary from "./TrialSummary";
import TrialFollowupForm from "./TrialFollowupForm";

const nodesMin = 4;
const nodesMax = 100;
const cpuPerNodeMin = 1;
const cpuPerNodeMax = 16;
const gpuPerNodeMin = 0;
const gpuPerNodeMax = 16;
const ramPerNodeMin = 2;
const ramPerNodeMax = 64;
const storagePerNodeMin = 0.25;
const storagePerNodeMax = 100;

let submissionStatus = null;

function onSubmit(values, actions) {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": "Andalusia-website eterprise trial request",
      ...values,
    }),
  })
    .then(() => (submissionStatus = "success"))
    .catch(() => (submissionStatus = "fail"))
    .finally(() => actions.setSubmitting(false));
}

const ConfigForm = (props) => {
  const { values, touched, errors, isSubmitting } = props;

  const [configured, setConfigured] = useState(false);

  const nodesRef = useRef(null);
  const nodesCpu = useRef(null);
  const nodesGpu = useRef(null);
  const nodesRam = useRef(null);
  const nodesStorage = useRef(null);
  const configButtonRef = useRef(null);
  const nameRef = useRef(null);

  function checkFollowup() {
    if (configured && checkTrialConfig(errors, touched)) return true;
    else return false;
  }

  // config submit button
  function handleConfirmConfigure() {
    if (checkTrialConfig(errors, touched)) {
      setConfigured(true);
      setTimeout(() => nameRef.current.focus(), 1); // wait till not disabled
    }
    // manually touch first 5 fields then refocus button
    else {
      nodesRef.current.focus();
      nodesCpu.current.focus();
      nodesGpu.current.focus();
      nodesRam.current.focus();
      nodesStorage.current.focus();
      configButtonRef.current.focus();
    }
  }

  // back button
  function handleReconfigure() {
    setConfigured(false);
    setTimeout(() => configButtonRef.current.focus(), 1);
  }

  const [termsVisible, setTermsVisible] = useState(false);
  const handleTermsToggle = () => setTermsVisible(!termsVisible);

  useEffect(() => (submissionStatus = null));

  return (
    <section
      className={`trial-section ${
        submissionStatus?.length ? "fullscreen" : "padded"
      }-section`}
    >
      <h1 className="u-text-c u-title">
        {submissionMessage[submissionStatus]?.title || "Enterprise trial"}
      </h1>

      {submissionStatus ? (
        <div className="contact-form u-mh-auto u-mb-md">
          <p className="u-font-xl u-text-c">
            {submissionMessage[submissionStatus]?.body}
          </p>
        </div>
      ) : (
        <Form
          className="trial-config"
          name="Andalusia-website contact form"
          data-netlify={true}
        >
          <div
            className={`trial-config-form trial-card darkglass u-mh-auto u-mb-md is-${
              checkFollowup(submissionStatus) ? "hidden" : "visible"
            }`}
          >
            <h2 className="u-text-c">Design your cluster</h2>

            <TextField
              name="nodes"
              labelText="Nodes"
              placeholder={`${nodesMin}+`}
              helpText={`Max ${nodesMax}`}
              type="number"
              min={nodesMin}
              max={nodesMax}
              step="1"
              suffix=" nodes"
              fontSize="md"
              touched={touched}
              errors={errors}
              disabled={checkFollowup(submissionStatus)}
              refs={nodesRef}
            />
            <TextField
              name="cpuPerNode"
              labelText="CPUs / node"
              placeholder={`${cpuPerNodeMin}+ / node`}
              helpText={`Max ${cpuPerNodeMax} / node`}
              type="number"
              min={cpuPerNodeMin}
              max={cpuPerNodeMax}
              step="1"
              fontSize="md"
              touched={touched}
              errors={errors}
              disabled={checkFollowup(submissionStatus)}
              refs={nodesCpu}
            />
            <TextField
              name="gpuPerNode"
              labelText="GPUs / node"
              placeholder={`${gpuPerNodeMin}+ / node`}
              helpText={`Max ${gpuPerNodeMax} / node`}
              type="number"
              min={gpuPerNodeMin}
              max={gpuPerNodeMax}
              step="1"
              fontSize="md"
              touched={touched}
              errors={errors}
              disabled={checkFollowup(submissionStatus)}
              refs={nodesGpu}
            />
            <TextField
              name="ramPerNode"
              labelText="RAM / node"
              placeholder={`${ramPerNodeMin}+ GB / node`}
              helpText={`Max ${ramPerNodeMax} GB / node`}
              type="number"
              min={ramPerNodeMin}
              max={ramPerNodeMax}
              step="1"
              fontSize="md"
              touched={touched}
              errors={errors}
              disabled={checkFollowup(submissionStatus)}
              refs={nodesRam}
            />
            <TextField
              name="storagePerNode"
              labelText="Storage / node"
              placeholder={`${storagePerNodeMin}+ TB / node`}
              helpText={`Max ${storagePerNodeMax} TB / node`}
              type="number"
              min={storagePerNodeMin}
              max={storagePerNodeMax}
              step="0.25"
              fontSize="md"
              touched={touched}
              errors={errors}
              disabled={checkFollowup(submissionStatus)}
              refs={nodesStorage}
            />

            <Button
              className="trial-followup-form-button"
              fontSize="md"
              fill
              type="button"
              disabled={checkFollowup(submissionStatus)}
              onClick={() => handleConfirmConfigure()}
              refs={configButtonRef}
            >
              Start free 3 month trial
            </Button>
          </div>

          <TrialSummary
            values={values}
            backButtonIsVisible={checkFollowup(submissionStatus)}
            onReconfigure={() => handleReconfigure()}
            termsVisible={termsVisible}
            onTermsToggle={handleTermsToggle}
          />

          <TrialFollowupForm
            title="Submit trial request"
            isVisible={checkFollowup(submissionStatus)}
            touched={touched}
            errors={errors}
            isSubmitting={isSubmitting}
            showTermsToggle={true}
            handleTermsToggle={handleTermsToggle}
            focusRef={nameRef}
          />
        </Form>
      )}
    </section>
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
      name: props.name || "",
      company: props.company || "",
      role: props.role || "",
      email: props.email || "",
      location: props.location || "",
      terms: props.terms || false,
    };
  },
  validationSchema: Yup.object().shape({
    nodes: Yup.number()
      .integer()
      .min(nodesMin)
      .max(nodesMax)
      .required("Required"),
    cpuPerNode: Yup.number()
      .integer()
      .min(cpuPerNodeMin)
      .max(cpuPerNodeMax)
      .required("Required"),
    gpuPerNode: Yup.number()
      .integer()
      .min(gpuPerNodeMin)
      .max(gpuPerNodeMax)
      .required("Required"),
    ramPerNode: Yup.number()
      .integer()
      .min(ramPerNodeMin)
      .max(ramPerNodeMax)
      .required("Choose RAM (in GB)"),
    storagePerNode: Yup.number()
      .min(storagePerNodeMin)
      .max(storagePerNodeMax)
      .required("Choose storage (in TB)"),
    name: Yup.string().required("Required"),
    company: Yup.string().required("Required"),
    role: Yup.string(),
    email: Yup.string().email("Invalid").required("Required"),
    location: Yup.string().required("Required"),
    terms: Yup.bool().oneOf([true], "Please agree to the terms"),
  }),
  handleSubmit: (values, actions) => onSubmit(values, actions),
})(ConfigForm);

export default TrialConfig;
