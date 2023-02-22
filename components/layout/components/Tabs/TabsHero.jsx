import RetinaImg from "/components/common/RetinaImg";

export default function TabsHero(props) {
  const { title, subtitle, imgSlug } = props;

  return (
    <header className="tabs-hero">
      <div className="tabs-hero-inner wrapper">
        <h2 className="tabs-hero-title">
          <span className="tabs-hero-title-text">
            {title || "missing `title` prop"}
          </span>
          <span className="tabs-hero-title-subtitle u-font-xs">
            {subtitle || "missing `subtitle` prop"}
          </span>
        </h2>
      </div>
      {imgSlug && (
        <RetinaImg
          className="tabs-hero-img"
          file={`tabs/${imgSlug}`}
          extension="jpg"
        />
      )}
    </header>
  );
}
