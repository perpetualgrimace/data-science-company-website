export default function addCommas(val) {
  if (!val) return null;
  return val.toLocaleString("en-US");
}
