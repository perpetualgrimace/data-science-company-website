export default function checkTrialConfig(errors, touched) {
  if (checkConfigFieldsValid(errors, touched)) {
    return true;
  } else return false;
}

function checkConfigFieldsValid(errors, touched) {
  const errorKeys = Object.keys(errors);
  const touchedKeys = Object.keys(touched);

  // no fields touched
  if (touchedKeys.length === 0) return false;
  // errors in first 5 fields
  else if (
    errorKeys.length &&
    (errors.nodes ||
      errors.cpuPerNode ||
      errors.gpuPerNode ||
      errors.ramPerNode ||
      errors.storagePerNode)
  ) {
    return false;
  }
  // config valid
  else return true;
}
