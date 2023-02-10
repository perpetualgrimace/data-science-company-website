export default function DiamondCard(props) {
  const { title, subtitle, theme, Icon } = props;
  return (
    <li class="diamond-card darkglass u-text-c u-p-sm">
      <div className={`diamond-card-icon u-${theme}-fill`}>{Icon}</div>
      <h2 className="diamond-card-title u-font-xl u-mb-0">
        {title || "no title"}
      </h2>
      <p className="diamond-card-subtitle u-mb-xs">
        {subtitle || "no subtitle"}
      </p>
    </li>
  );
}
