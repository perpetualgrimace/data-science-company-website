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

export default function TrialSumary(props) {
  const { values } = props;

  return (
    <section
      className="trial-summary trial-card darkglass u-mh-auto u-mb-md"
      name="Andalusia-website contact form"
      data-netlify={true}
    >
      <h2 className="u-text-c">Cluster summary</h2>

      <p className="trial-line u-font-lg">
        <span className="u-heading u-font-xxl">{values.nodes || 0} </span>
        <span className="trial-label">nodes</span>
        <span className="trial-figure">
          ${calculateNodeCost(values.nodes)} monthly
        </span>
      </p>

      <p className="trial-line u-font-lg">
        <span className="u-heading u-font-xxl">
          {values.cpuPerNode * values.nodes || 0} 
        </span>
        <span className="trial-label">CPUs total</span>
        <span className="trial-figure">
          ${calculateCPUCost(values.cpuPerNode, values.nodes)} monthly
        </span>
      </p>

      <p className="trial-line u-font-lg">
        <span className="u-heading u-font-xxl">
          {values.gpuPerNode * values.nodes || 0} 
        </span>
        <span className="trial-label">GPUs total</span>
        <span className="trial-figure">
          ${calculateGPUCost(values.gpuPerNode, values.nodes)} monthly
        </span>
      </p>

      <p className="trial-line u-font-lg">
        <span className="u-heading u-font-xxl">
          {values.ramPerNode * values.nodes || 0} GB 
        </span>
        <span className="trial-label">RAM total</span>
        <span className="trial-figure">
          ${calculateRAMCost(values.ramPerNode, values.nodes)} monthly
        </span>
      </p>

      <p className="trial-line u-font-lg">
        <span className="u-heading u-font-xxl">
          {values.storagePerNode * values.nodes || 0} TB 
        </span>
        <span className="trial-label">RAM total</span>
        <span className="trial-figure">
          ${calculateStorageCost(values.storagePerNode, values.nodes)} 
          monthly
        </span>
      </p>

      <p className="trial-line u-font-lg">
        <span className="u-heading u-font-xxl">Total cost </span>
        <span className="trial-figure">
          ${calculateTotalCost(values)}
        </span>
      </p>
    </section>
  );
}
