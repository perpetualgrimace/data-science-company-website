// https://www.headway.io/blog/building-a-svg-line-chart-in-react
import { useState, useRef } from "react";
import moment from "moment";

import { dateFormat, chartDateFormat } from "/consts";

import sortArrayByObjKey from "/helpers/sortArrayByObjKey";
import toPercentage from "/helpers/toPercentage";

import * as styles from "/styles/1-utils/_variables.module.scss";

import InPortal from "/components/InPortal";
import Tooltip from "/components/common/Tooltip";

const malachite = styles.malachiteMd;

const innerLineColor = styles.visInnerLineColor;
const innerLineWidth = styles.visInnerLineWidth;

const connectingLineColor = styles.gray;
const connectingLineWidth = "2px";

const outerLineColor = styles.visOuterLineColor;
const outerLineWidth = styles.visOuterLineWidth;

const labelColor = styles.visLabelColor;
const labelFont = styles.labelFont;

const precision = 2;
const horizontalGuideCount = 2;
const chartHeight = 225;
const chartWidth = 500;

function formatXLabel(val) {
  return moment(val).format(chartDateFormat);
}
function formatYLabels(max, i, PARTS) {
  return toPercentage(parseFloat(max * (i / PARTS)).toFixed(precision));
}

function filterOutEmptyKeys(arr) {
  return arr.filter((obj) => {
    if (typeof obj === "object" && Object.keys(obj).length !== 0) {
      return true;
    }
  });
}

function isEtaPoint(i, points, isComplete) {
  if (i === points.length - 1 && isComplete === false) return true;
}

function getTooltipProps(el, i, points) {
  const label = moment(points[i].label).format(dateFormat);
  const description = points[i].description;

  let position = false;
  if (el) {
    const rect = el.getBoundingClientRect();
    const left = rect.left + window.scrollX + 7;
    const top = rect.top + 37;

    position = { top, left };
  }

  return { label, description, style: position };
}

export default function LineChart(props) {
  const { data, isComplete } = props;

  const fontSize = chartWidth / 33.333;
  const labelTextStyle = {
    fill: labelColor,
    fontSize: fontSize,
    fontFamily: labelFont,
  };

  const filteredData = sortArrayByObjKey(
    filterOutEmptyKeys(data),
    "label"
  );

  const maximumXFromData = Math.max(...filteredData.map((e) => e.x));
  const maximumYFromData = 1;

  const digits =
    parseFloat(maximumYFromData.toString()).toFixed(precision).length + 1;

  const padding = (fontSize + digits) * 3;
  const chartWidthOffset = chartWidth - padding * 2;
  const chartHeightOffset = chartHeight - padding * 2;

  const points = filteredData.map((element) => {
    const { label, description } = element;
    const x = (element.x / maximumXFromData) * chartWidthOffset + padding;
    const y =
      chartHeightOffset -
      (element.y / maximumYFromData) * chartHeightOffset +
      padding;

    return { label, description, x, y };
  });

  const pointsJoined = points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  const ref = useRef([]);
  const [hasFocusedNode, setFocusedNode] = useState(false);

  const Axis = ({ coords }) => (
    <polyline
      fill="none"
      stroke={outerLineColor}
      strokeWidth={outerLineWidth}
      points={coords}
    />
  );

  const XAxis = () => (
    <Axis
      coords={`${padding},${chartHeight - padding} ${
        chartWidth - padding
      },${chartHeight - padding}`}
    />
  );

  const YAxis = () => (
    <Axis
      coords={`${padding},${padding} ${padding},${chartHeight - padding}`}
    />
  );

  const VerticalGuides = () => {
    const guideCount = 2;

    const startY = padding;
    const endY = chartHeight - padding;

    return new Array(guideCount).fill(0).map((_, i) => {
      const ratio = (i + 1) / guideCount;

      const xCoordinate = padding + ratio * (chartWidth - padding * 2);

      return (
        <polyline
          key={`vertical-guide-${i}`}
          fill="none"
          stroke={innerLineColor}
          strokeWidth={innerLineWidth}
          points={`${xCoordinate},${startY} ${xCoordinate},${endY}`}
        />
      );
    });
  };

  const HorizontalGuides = () => {
    const startX = padding;
    const endX = chartWidth - padding;

    return new Array(horizontalGuideCount).fill(0).map((_, i) => {
      const ratio = (i + 1) / horizontalGuideCount;

      const yCoordinate =
        chartHeightOffset - chartHeightOffset * ratio + padding;

      return (
        <polyline
          key={`horizontal-guide-${i}`}
          fill="none"
          stroke={innerLineColor}
          strokeWidth={innerLineWidth}
          points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
        />
      );
    });
  };

  const XAxisLabels = () => {
    const y = chartHeight - padding + fontSize * 2;

    return filteredData.map((element, i) => {
      const x =
        (element.x / maximumXFromData) * chartWidthOffset +
        padding * 0.75 -
        fontSize / 2;

      return (
        (i === 0 || i === filteredData.length - 1) && (
          <text key={i} x={x} y={y} style={labelTextStyle}>
            {formatXLabel(element.label)}
          </text>
        )
      );
    });
  };

  const YAxisLabels = () => {
    const PARTS = horizontalGuideCount;

    return new Array(PARTS + 1).fill(0).map((_, i) => {
      const x = fontSize;
      const ratio = i / horizontalGuideCount;

      const yCoordinate =
        chartHeightOffset -
        chartHeightOffset * ratio +
        padding +
        fontSize / 2;

      return (
        <text
          key={`text-label-${i}`}
          x={x}
          y={yCoordinate}
          style={labelTextStyle}
        >
          {formatYLabels(maximumYFromData, i, PARTS)}
        </text>
      );
    });
  };

  const Dots = () =>
    points.map((dot, i) => (
      <circle
        key={`point-${i}`}
        ref={(el) => (ref.current[i] = el)}
        cx={dot.x}
        cy={dot.y}
        r="5"
        aria-label={`Task ${i}: ${points[i].label}`}
        stroke="transparent"
        strokeWidth="10"
        onMouseOver={(e) => setFocusedNode(i)}
        onMouseLeave={(e) => setFocusedNode(false)}
        fill={
          isEtaPoint(i, points, isComplete) || i === 0
            ? connectingLineColor
            : malachite
        }
      />
    ));

  const Line = () => (
    <polyline
      fill="none"
      stroke={connectingLineColor}
      strokeWidth={connectingLineWidth}
      points={pointsJoined}
    />
  );

  return (
    <div className="line-chart">
      <svg
        className="line-chart-svg"
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        style={{ marginTop: -(padding / 2) }}
      >
        <XAxis />
        <XAxisLabels />
        <VerticalGuides />

        <YAxis />
        <YAxisLabels />
        <HorizontalGuides />

        <Line />
        <Dots />
      </svg>

      {hasFocusedNode !== false && (
        <InPortal>
          <Tooltip
            {...getTooltipProps(
              ref.current[hasFocusedNode],
              hasFocusedNode,
              points
            )}
            autoPosition
          />
        </InPortal>
      )}
    </div>
  );
}
