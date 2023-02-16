import IconBullet from "/components/common/IconBullet";

export default function IntroSection(props) {
  const { title, subtitle, bullets } = props;
  return (
    <section className="fullscreen-section intro-section">
      <h1 className="u-text-c u-title">
        {title || "missing `title` prop"}
      </h1>

      <div className="darkglass">
        <h2 className="u-text-l-c u-mb-lg">
          {subtitle || "missing `subtitle` prop"}
        </h2>

        {bullets.map((bullet) => (
          <IconBullet
            title={bullet?.title}
            text={bullet?.text}
            theme={bullet?.theme}
            Icon={bullet?.Icon}
          />
        ))}
      </div>
    </section>
  );
}
