export default function toPercentage(str) {
  if (str === 0) return "none";
  if (str) {
    const decimal = (str * 100).toFixed(1);

    return `${decimal.split(".")[0]}%`;
  }
  return "missing `str` in `toDecimal()`";
}
