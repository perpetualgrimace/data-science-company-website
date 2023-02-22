import IconBullet from "/components/common/IconBullet";

export default function IntroSection(props) {
  const { title, slug, subtitle, bullets } = props;
  return (
    <section className="fullscreen-section intro-section">
      <h1 className="u-text-c u-title" id={slug || "intro-section"}>
        {title || "missing `title` prop"}
      </h1>

      <div className="darkglass">
        <h2 className="u-text-l-c u-mb-lg">
          {subtitle || "missing `subtitle` prop"}
        </h2>

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
