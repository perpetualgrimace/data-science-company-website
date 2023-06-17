import { useRef, useEffect, useState } from "react";

import * as Yup from "yup";
import { withFormik, Form } from "formik";

import submissionMessage from "/content/submissionMessage.js";
import encode from "/helpers/encode.js";

import Button from "/components/controls/Button";
import Checkbox from "/components/controls/Checkbox";
import Select from "/components/controls/Select";
import TextField from "/components/controls/TextField";

import EllipsisIcon from "/components/icons/EllipsisIcon";
import SendIcon from "/components/icons/SendIcon";

import checkTrialConfig from "./checkTrialConfig.js";
import TrialSummary from "./TrialSummary";
import TrialFollowupForm from "./TrialFollowupForm";

const nodesMin = 4;
const nodesMax = 100;
const cpuPerNodeMin = 1;
const cpuPerNodeMax = 16;
const gpuPerNodeMin = 1;
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
      "form-name": "Andalusia-website contact form",
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

  const configButtonRef = useRef(null);
  const backButtonRef = useRef(null);

  function checkFollowup() {
    if (configured && checkTrialConfig(errors)) return true;
    else return false;
  }

  // config submit button
  function handleConfirmConfigure() {
    if (checkTrialConfig(errors)) {
      setConfigured(true);
      setTimeout(() => backButtonRef.current.focus(), 1); // wait till not disabled
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
    <section className="trial-section padded-section">
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
              placeholder={`${nodesMin}+`}
              helpText={`Max ${nodesMax}`}
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
              placeholder={`${cpuPerNodeMin}+ / node`}
              helpText={`Max ${cpuPerNodeMax} / node`}
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
              placeholder={`${gpuPerNodeMin}+ / node`}
              helpText={`Max ${gpuPerNodeMax} / node`}
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
              placeholder={`${ramPerNodeMin}+ GB / node`}
              helpText={`Max ${ramPerNodeMax} GB / node`}
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
              placeholder={`${storagePerNodeMin}+ TB / node`}
              helpText={`Max ${storagePerNodeMax} TB / node`}
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
              type="buton"
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
            termsVisible={termsVisible}
            onTermsToggle={handleTermsToggle}
          />

          <TrialFollowupForm isVisible={checkFollowup(submissionStatus)}>
            <TextField
              labelText="Company name"
              placeholder="Your Company"
              name="company"
              fontSize="md"
              touched={touched}
              errors={errors}
              disabled={!checkFollowup(submissionStatus)}
            />
            <TextField
              labelText="Contact email address"
              placeholder="your@emailaddress.com"
              name="email"
              fontSize="md"
              touched={touched}
              errors={errors}
              disabled={!checkFollowup(submissionStatus)}
            />

            <Select
              labelText="Company location"
              name="location"
              touched={touched}
              errors={errors}
              disabled={!checkFollowup(submissionStatus)}
              options={[
                { label: "United States", value: "us" },
                { label: "Saudi Arabia", value: "sa" },
              ]}
            />

            <Checkbox
              name="accept-terms"
              touched={touched}
              errors={errors}
              disabled={!checkFollowup(submissionStatus)}
              labelText={
                <>
                  I agree to the{" "}
                  <button
                    type="button"
                    className="link"
                    onClick={handleTermsToggle}
                    disabled={!checkFollowup(submissionStatus)}
                    tabIndex={
                      !checkFollowup(submissionStatus) ? "-1" : ""
                    }
                  >
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
              disabled={!checkFollowup(submissionStatus) || isSubmitting}
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
          </TrialFollowupForm>
        </div>
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
      company: props.company || "",
      email: props.email || "",
      location: props.location || "us",
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
      .required("Required"),
    storagePerNode: Yup.number()
      .min(storagePerNodeMin)
      .max(storagePerNodeMax)
      .required("Required"),
    email: Yup.string().email("Invalid").required("Required"),
    name: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
  }),
  handleSubmit: (values, actions) => onSubmit(values, actions),
})(ConfigForm);

export default TrialConfig;
