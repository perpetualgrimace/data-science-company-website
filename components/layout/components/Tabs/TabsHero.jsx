import { pathPrefix } from "/environment.js";

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
        <img
          className="tabs-hero-img"
          src={`/${pathPrefix}/tabs/${imgSlug}.jpg`}
          srcSet={`
            /${pathPrefix}/tabs/${imgSlug}.jpg 1x,
            /${pathPrefix}/tabs/${imgSlug}@2x.jpg 2x`}
          alt=""
          draggable="false"
          loading="lazy"
        />
      )}
    </header>
  );
}
