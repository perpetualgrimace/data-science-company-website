import Link from "next/link";

export default function IconBullet(props) {
  const { title, text, Icon, theme, moreHref } = props;

  return (
    <div className="icon-bullet u-mb-lg">
      <div className={`icon-bullet-icon u-${theme}-fill`}>{Icon}</div>
      <h3 className="icon-bullet-title u-font-lg u-mb-xxs">{title}</h3>
      <p className="icon-bullet-text u-font-md">{text}</p>
      {moreHref && (
        <Link href={moreHref} passHref>
          <a
            className={`icon-bullet-link u-font-md u-${theme}-color`}
            href={moreHref}
          >
            Learn more →
          </a>
        </Link>
      )}
    </div>
  );
}
