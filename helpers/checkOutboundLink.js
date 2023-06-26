// returns `true` if outbound link
export default function checkOutboundLink(route) {
  if (route.indexOf("https://") === -1) return false;
  return true;
}
