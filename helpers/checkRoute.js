export default function checkRoute(route, currRoute) {
  if (route === currRoute) {
    return "page";
  }

  return null;
}
