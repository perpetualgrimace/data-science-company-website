import { pathPrefix } from "/environment.js";

export default function TabsHero(props) {
  const { title, subtitle, imgSlug } = props;

  return (
    <header className="tabs-hero" role="banner">
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
          src={`/${pathPrefix}/tabs/${imgSlug}-tabs.png`}
          srcSet={`
            /${pathPrefix}/tabs/${imgSlug}-tabs.png 1x,
            /${pathPrefix}/tabs/${imgSlug}-tabs@2x.png 2x`}
          alt=""
          draggable="false"
          loading="lazy"
        />
      )}
    </header>
  );
}
