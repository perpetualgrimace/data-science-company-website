import { pathPrefix } from "/environment.js";

export default function DiamondImg() {
  return (
    <img
      className="diamond-img"
      src={`/${pathPrefix}/diamond.png`}
      srcSet={`
            /${pathPrefix}/diamond.png 1x,
            /${pathPrefix}/diamond@2x.png 2x`}
      alt=""
      draggable="false"
    />
  );
}
