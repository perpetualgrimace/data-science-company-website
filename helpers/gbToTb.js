export default function gbToTb(str) {
  if (str) {
    const decimal = (str / 1000).toFixed(1);

    if (decimal - Math.floor(decimal) !== 0) {
      return `${decimal} TB`;
    } else {
      return `${decimal.split(".")[0]} TB`;
    }
  }
  return "missing `str` in `toDecimal()`";
}
