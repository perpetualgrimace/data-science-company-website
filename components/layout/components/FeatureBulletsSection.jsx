import IconBullet from "/components/common/IconBullet";

export default function FeatureBulletsSection(props) {
  const { title, slug, subtitle, bullets } = props;
  return (
    <section
      className="fullscreen-section feature-bullets-section"
      id={slug || "feature-bullets-section"}
    >
      <h2 className="u-text-c u-title">{title || "missing title"}</h2>

      <div className="darkglass">
        {bullets.map((bullet) => (
          <IconBullet
            key={bullet?.title}
            title={bullet?.title}
            text={bullet?.text}
            theme={bullet?.theme}
            Icon={bullet?.Icon}
            moreHref={bullet?.moreHref}
          />
        ))}
      </div>
    </section>
  );
}
