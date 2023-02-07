export default function formatTime(days) {
  if (days <= 7) return `${days} days`;
  else if (days > 365) return `${Math.floor(days / 365)} years`;
  else return `${Math.floor(days / 7)} weeks`;
}
