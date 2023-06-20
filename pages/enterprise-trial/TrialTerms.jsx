import termsOfService from "/content/termsOfService.js";

import CrossIcon from "/components/icons/CrossIcon";

export default function TrialSumary(props) {
  const { isVisible, onToggle } = props;

  return (
    <section
      className={`trial-terms trial-card darkglass u-mh-auto u-mb-md is-${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <h2 className="u-text-c">
        {termsOfService.title}
        <div className="u-font-sm"> {termsOfService.subtitle}</div>
      </h2>

      <button
        className="trial-terms-button u-subhead u-font-sm"
        type="button"
        onClick={onToggle}
        tabIndex={!isVisible ? "-1" : null}
        disabled={!isVisible}
      >
        <CrossIcon />
        <span className="u-visually-hidden"> back</span>
      </button>

      <div
        className="trial-terms-text"
        tabIndex={!isVisible ? "-1" : null}
        disabled={!isVisible}
      >
        {termsOfService.body?.map((term) => (
          <div className="trial-terms-text-block" key={term.paragraph}>
            {term.subhead && (
              <h2 className="u-font-lg u-mb-xxs">{term.subhead}</h2>
            )}
            <p className="u-font-md u-mb-md">{term.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
