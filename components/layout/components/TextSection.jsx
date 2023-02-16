export default function TextSection(props) {
  const { title, slug, children } = props;
  return (
    <section className="text-section fullscreen-section">
      <h2 className="u-text-c u-title" id={slug || "text-section"}>
        {title || "missing title"}
      </h2>

      <div className="text-section-inner darkglass u-font-xl">
        {children}
      </div>
    </section>
  );
}
