import { pathPrefix } from "/environment.js";

export default function SpaceBG(props) {
  const { className, variant } = props;

  return (
    <div className={`space-bg${className ? ` ${className}` : ""}`}>
      <img
        className="space-bg-img"
        src={`/${pathPrefix}/bg.jpg${variant ? `-${variant}` : ""}`}
        srcSet={`
          /${pathPrefix}/bg.jpg${variant ? `-${variant}` : ""} 1x,
          /${pathPrefix}/bg${variant ? `-${variant}` : ""}@2x.jpg 2x`}
        alt=""
        draggable="false"
      />
    </div>
  );
}
