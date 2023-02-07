export default function getServerStatSum(servers, key) {
  if (servers.length === 0) return false;
  else if (servers.length === 1) return servers[0][[key]];
  return servers.reduce((total, next) => total[[key]] + next[[key]]);
}
