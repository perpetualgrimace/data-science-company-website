export function constructCoords(keys, values) {
  return `
    ${getCoord1(convertToPercentage(values[keys[0]]))}
    ${getCoord2(convertToPercentage(values[keys[1]]))}
    ${getCoord3(convertToPercentage(values[keys[2]]))}
    ${getCoord4(convertToPercentage(values[keys[3]]))}
    ${getCoord5(convertToPercentage(values[keys[4]]))}
    ${getCoord6(convertToPercentage(values[keys[5]]))}
  `;
}

function convertToPercentage(val) {
  return (val * 20) / 100;
}

// coordinate helpers
function getCoord1(percentage) {
  return `${verticalHalf}, ${calculateTop(percentage)}`;
}
function getCoord2(percentage) {
  return `${calculateRight(percentage)}, ${calculateUpper(percentage)}`;
}
function getCoord3(percentage) {
  return `${calculateRight(percentage)}, ${calculateLower(percentage)}`;
}
function getCoord4(percentage) {
  return `${verticalHalf}, ${calculateBottom(percentage)}`;
}
function getCoord5(percentage) {
  return `${calculateLeft(percentage)}, ${calculateLower(percentage)}`;
}
function getCoord6(percentage) {
  return `${calculateLeft(percentage)}, ${calculateUpper(percentage)}`;
}

// horizontal helpers
const horizontalHalf = 36.5;

function calculateLeft(percentage) {
  const x = horizontalHalf - percentage * horizontalHalf;
  const xOffset = x + 5 * percentage;
  return xOffset;
}
function calculateRight(percentage) {
  const x = horizontalHalf * percentage + horizontalHalf;
  const xOffset = x - 4 * percentage;
  return xOffset;
}

// vertical helpers
const verticalUpper = 19;
const verticalHalf = 37;

function calculateTop(percentage) {
  return verticalHalf - percentage * verticalHalf;
}
function calculateUpper(percentage) {
  return verticalHalf - percentage * verticalUpper;
}
function calculateLower(percentage) {
  return verticalHalf + percentage * verticalUpper;
}
function calculateBottom(percentage) {
  return verticalHalf + percentage * verticalHalf;
}
