export default function getTheme(val, isOpen) {
  // great
  if (val > 3.5) return isOpen ? "malachite-dark" : "malachite-md";
  // not great
  else if (val < 2) return "salmon";
  // okay
  return isOpen ? "salmon-dark" : "salmon-light";
}
