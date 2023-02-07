export default function Stat(props) {
  const { label, value, fontSize, theme } = props;

  return (
    <dl className={`stat u-font-${fontSize || "sm"}`}>
      <dt className="stat-label">{label}</dt>
      <dd className={`stat-value${theme ? ` u-${theme}-color` : ""}`}>
        {value}
      </dd>
    </dl>
  );
}
