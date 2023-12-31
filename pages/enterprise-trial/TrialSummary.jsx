import ChevronLeftIcon from "/components/icons/ChevronLeftIcon";

import TrialLine from "./TrialLine";
import TrialTerms from "./TrialTerms";

function calculateNodeCost(nodes) {
  const dollarsPerUnit = 5000;
  return nodes * dollarsPerUnit || 0;
}
function calculateCPUCost(value, nodes) {
  const dollarsPerUnit = 100;
  return value * nodes * dollarsPerUnit || 0;
}
function calculateGPUCost(value, nodes) {
  const dollarsPerUnit = 100;
  return value * nodes * dollarsPerUnit || 0;
}
function calculateRAMCost(value, nodes) {
  const dollarsPerGB = 25;
  return value * nodes * dollarsPerGB || 0;
}
function calculateStorageCost(value, nodes) {
  const dollarsPerTB = 800;
  return value * nodes * dollarsPerTB || 0;
}
function calculateTotalCost(values) {
  if (values?.nodes) {
    const { nodes, cpuPerNode, gpuPerNode, ramPerNode, storagePerNode } =
      values;
    return (
      calculateNodeCost(nodes) +
      calculateCPUCost(cpuPerNode, nodes) +
      calculateGPUCost(gpuPerNode, nodes) +
      calculateRAMCost(ramPerNode, nodes) +
      calculateStorageCost(storagePerNode, nodes)
    );
  }

  return 0, 0, 0, 0, 0;
}

export default function TrialSumary(props) {
  const {
    values,
    backButtonIsVisible,
    onReconfigure,
    termsVisible,
    onTermsToggle,
  } = props;

  return (
    <>
      <section
        className={`trial-summary trial-card darkglass u-mh-auto u-mb-md ${
          backButtonIsVisible ? "followup" : "configure"
        }-mode is-${termsVisible ? "hidden" : "visible"}`}
      >
        <h2 className="u-text-c">Estimated cost</h2>

        <button
          className={`trial-summary-button u-subhead u-font-sm is-${
            backButtonIsVisible ? "visible" : "hidden"
          }`}
          type="button"
          onClick={onReconfigure}
          tabIndex={!backButtonIsVisible || termsVisible ? "-1" : null}
          disabled={!backButtonIsVisible || termsVisible}
        >
          <ChevronLeftIcon /> edit
        </button>

        <TrialLine
          value={values?.nodes || 0}
          measure=" nodes "
          cost={calculateNodeCost(values?.nodes) || "0"}
        />
        <TrialLine
          value={values?.cpuPerNode * values?.nodes || 0}
          measure=" CPUs total "
          cost={
            calculateCPUCost(values?.cpuPerNode, values?.nodes) || "0"
          }
        />
        <TrialLine
          value={values?.gpuPerNode * values?.nodes || 0}
          measure=" GPUs total "
          cost={
            calculateGPUCost(values?.gpuPerNode, values?.nodes) || "0"
          }
        />
        <TrialLine
          value={`${values?.ramPerNode * values?.nodes || 0} GB`}
          measure=" RAM total "
          cost={
            calculateRAMCost(values?.ramPerNode, values?.nodes) || "0"
          }
        />
        <TrialLine
          value={`${values?.storagePerNode * values?.nodes || 0} TB`}
          measure=" storage total "
          cost={
            calculateStorageCost(values?.storagePerNode, values?.nodes) ||
            "0"
          }
        />

        <TrialLine
          value="Total cost "
          cost={calculateTotalCost(values) || "0"}
        />
      </section>

      <TrialTerms isVisible={termsVisible} onToggle={onTermsToggle} />
    </>
  );
}
