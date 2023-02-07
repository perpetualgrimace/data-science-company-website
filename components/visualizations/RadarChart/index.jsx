import { constructCoords } from "./helpers.js";
import * as styles from "/styles/1-utils/_variables.module.scss";

const mulberry = styles.mulberryMd;
const salmon = styles.salmonMd;
const malachite = styles.malachiteMd;

const innerLineColor = styles.visInnerLineColor;
const innerLineWidth = styles.visInnerLineWidth;

const outerLineColor = styles.visOuterLineColor;
const outerLineWidth = styles.visOuterLineWidth;
const backgroundFill = styles.visBackground;

export default function RadarChart(props) {
  const { keys, values, id, children } = props;

  const coords = constructCoords(keys, values);

  return (
    <div className="radar-chart">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="90"
        height="98"
        viewBox="0 0 90 98"
      >
        <defs>
          <radialGradient id={`${id}-prism-gradient`}>
            <stop offset="0%" stopColor={mulberry} />
            <stop offset="33%" stopColor={salmon} />
            <stop offset="100%" stopColor={malachite} />
          </radialGradient>
        </defs>

        <g fill="none" fillRule="evenodd" transform="translate(8 11)">
          <polygon points={coords} fill={`url(#${id}-prism-gradient)`} />

          <path
            fill={backgroundFill}
            stroke={outerLineColor}
            strokeWidth={outerLineWidth}
            strokeLinejoin="square"
            d="M37 .577 68.543 18.79V55.21L37 73.423 5.457 55.21V18.79L37 .577Z"
          />

          <path
            stroke={innerLineColor}
            strokeWidth={innerLineWidth}
            d="m37 8.289 24.865 14.355v28.712L37 65.71 12.135 51.356V22.644L37 8.29Z"
          />
          <path
            stroke={innerLineColor}
            strokeWidth={innerLineWidth}
            d="m37 15.289 18.803 10.855v21.712L37 58.71 18.197 47.856V26.144L37 15.29Z"
          />
          <path
            stroke={innerLineColor}
            strokeWidth={innerLineWidth}
            d="m37 22.289 12.74 7.355v14.712L37 51.71l-12.74-7.355V29.644L37 22.29Z"
          />
          <path
            stroke={innerLineColor}
            strokeWidth={innerLineWidth}
            d="m37 29.289 6.678 3.855v7.712L37 44.71l-6.678-3.855v-7.712L37 29.29Z"
          />
        </g>
      </svg>

      {children}
    </div>
  );
}
