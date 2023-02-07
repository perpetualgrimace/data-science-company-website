import Link from "next/link";

import { pathPrefix } from "/environment.js";
import toPercentage from "/helpers/toPercentage";

function formatStat(stat) {
  let formattedStat = { ...stat };

  // percentage
  if (stat.label.includes("predictivenes")) {
    formattedStat.value = toPercentage(stat.value);
    return formattedStat;
  }
  // of 5
  else if (stat.label.includes("quality")) {
    formattedStat.value = `${stat.value}/5`;
    return formattedStat;
  }
  // handle plural words
  else if (parseInt(stat.value) === 1) {
    formattedStat.label = stat.label.slice(0, -1);
    return formattedStat;
  }

  return formattedStat;
}

export default function Tile(props) {
  const { href, imgSrc, label, stats } = props;

  return (
    <Link href={href}>
      <a className="asset-tile tile darkglass u-mb-md">
        <header className="asset-tile-header">
          <h2 className="asset-tile-header-label u-mv-auto">
            {label || "missing `label` prop in AssetTile"}
          </h2>

          {imgSrc && (
            <img
              className="asset-tile-header-bg"
              src={`/${pathPrefix}/thumbnail/${imgSrc}-thumb.png`}
              alt=""
              draggable="false"
              loading="lazy"
            />
          )}
        </header>

        {stats && stats.length && Array.isArray(stats) ? (
          <ul className="asset-tile-list">
            {stats.map((stat) => {
              const formattedStat = formatStat(stat);

              return (
                <li
                  className="asset-tile-stat u-font-md u-mb-xs"
                  key={formattedStat.label}
                >
                  <strong>{formattedStat.value}</strong>{" "}
                  {formattedStat.label}
                </li>
              );
            })}
          </ul>
        ) : (
          "no stats"
        )}
      </a>
    </Link>
  );
}
