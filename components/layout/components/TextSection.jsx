export default function TextSection(props) {
  const { title, slug, children } = props;
  return (
    <section
      className="text-section fullscreen-section"
      id={slug || "text-section"}
    >
      <h2 className="u-text-c u-title">{title || "missing title"}</h2>

      <div className="text-section-inner darkglass u-font-xl">
        {children}
      </div>
    </section>
  );
}
