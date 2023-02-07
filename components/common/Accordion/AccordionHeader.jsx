import ChevronDownIcon from "/components/icons/ChevronDownIcon";

import Stat from "/components/common/Stat";

export default function AccordionHeader(props) {
  const { children, meta, onClick, isOpen } = props;

  return (
    <button
      className="accordion-header button"
      onClick={onClick}
      aria-pressed={isOpen}
    >
      <div className="accordion-header-icon">
        <ChevronDownIcon />
      </div>

      <h2 className="accordion-header-title u-subhead u-font-md u-mb-0">
        {children}
        <span className="u-visually-hidden">
          {" "}
          ({isOpen ? "hide" : "show"} details)
        </span>
      </h2>

      {meta && (
        <div className="accordion-header-meta">
          {meta.map((stat) => (
            <Stat
              key={`${children}-${stat.label}-stat`}
              label={stat.label}
              value={stat.value}
              theme={stat.theme}
            />
          ))}
        </div>
      )}
    </button>
  );
}
