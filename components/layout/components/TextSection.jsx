export default function TextSection(props) {
  const { title, children } = props;
  return (
    <section className="text-section fullscreen-section">
      <h2 className="u-text-c u-title">
        {title || "missing `title` prop"}
      </h2>

      <div className="text-section-inner darkglass u-font-xl">
        {children}
      </div>
    </section>
  );
}
