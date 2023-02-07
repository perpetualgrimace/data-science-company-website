export default function HomeSection(props) {
  const { sectionTitle, children } = props;
  return (
    <section className="home-section u-mb-lg">
      {sectionTitle && <h2 className="home-heading">{sectionTitle}</h2>}
      <ul className="home-list">{children}</ul>
    </section>
  );
}
