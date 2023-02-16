import Diamond from "/components/layout/components/Diamond";
import DiamondCard from "/components/layout/components/DiamondCard";

export default function DiamondSection(props) {
  const { title, cards } = props;
  return (
    <section className="diamond-section fullscreen-section">
      <h2 className="u-text-c u-title">
        {title || "missing `title` prop"}
      </h2>

      <Diamond>
        {cards?.map((card) => (
          <DiamondCard
            title={card?.title}
            subtitle={card?.subtitle}
            slug={card?.slug}
            theme={card?.theme}
            Icon={card?.Icon}
          />
        ))}
      </Diamond>
    </section>
  );
}
