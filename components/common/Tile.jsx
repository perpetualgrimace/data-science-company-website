import Link from "next/link";
import { pathPrefix } from "/environment.js";
import OutboundIcon from "/components/icons/OutboundIcon";

export default function Tile(props) {
  const { href, outbound, imgSrc, label, altText, children } = props;

  return (
    <Link href={href}>
      <a className="tile darkglass u-mb-md">
        {outbound && (
          <div className="tile-icon">
            <OutboundIcon />
          </div>
        )}
        <div className="tile-inner u-m-auto">
          {imgSrc && (
            <img
              className="tile-img u-mh-auto"
              src={`/${pathPrefix}/icons/tile/${imgSrc}.png`}
              srcSet={`/${pathPrefix}/icons/tile/${imgSrc}.svg`}
              alt={altText}
              draggable="false"
            />
          )}
          {label && <span className="tile-title">{label}</span>}
          {children}
        </div>
      </a>
    </Link>
  );
}
