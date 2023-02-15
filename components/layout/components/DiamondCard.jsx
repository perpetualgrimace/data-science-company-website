import Link from "next/link";

export default function DiamondCard(props) {
  const { Icon, slug, subtitle, theme, title } = props;
  return (
    <Link href={slug} passHref>
      <a className="diamond-card darkglass u-text-c u-p-sm">
        <div className={`diamond-card-icon u-${theme}-fill`}>{Icon}</div>
        <p className="diamond-card-title u-heading u-font-lg u-mb-0">
          {title || "no title"}
        </p>
        <p className="diamond-card-subtitle u-mb-xxs">
          {subtitle || "no subtitle"}
        </p>
        <p
          className={`diamond-card-more-text u-subhead u-mb-xxs u-${theme}-color`}
        >
          Learn more
        </p>
      </a>
    </Link>
  );
}
