import addCommas from "/helpers/addCommas.js";

export default function TrialLine(props) {
  const { value, measure, currency = "$", cost } = props;

  return (
    <p className="trial-line u-font-lg">
      <span className="u-heading u-font-xxl">{value} </span>
      {measure && <span className="trial-label">{measure} </span>}
      <span className="trial-figure">
        {currency}
        {addCommas(cost)} monthly
      </span>
    </p>
  );
}
