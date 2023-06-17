export default function checkTrialConfig(errors) {
  if (checkConfigFieldsValid(errors)) {
    return true;
  } else return false;
}

function checkConfigFieldsValid(errors) {
  const errorKeys = Object.keys(errors);
  if (
    errorKeys.length &&
    (errors.nodes ||
      errors.cpuPerNode ||
      errors.gpuPerNode ||
      errors.ramPerNode ||
      errors.storagePerNode)
  ) {
    return false;
  }
  return true;
}
