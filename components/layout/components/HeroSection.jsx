export default function HeroSection(props) {
  const { slug, title, children } = props;
  return (
    <>
      <section
        className="fullscreen-section hero-section"
        id={slug || "hero-section"}
      >
        <h1 className="u-text-c u-title hero-title u-mh-auto u-mb-lg">
          {title || "missing `title` prop"}
        </h1>
        {children}
      </section>
    </>
  );
}
