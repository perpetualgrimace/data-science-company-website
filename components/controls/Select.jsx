import slugify from "/helpers/slugify";

import ChevronDownIcon from "/components/icons/ChevronDownIcon";

export default function Select(props) {
  const { label, options, selection, onChange, inline } = props;

  const labelId = `${slugify(
    label || "missing label prop in select component"
  )}-menu`;

  return (
    <label
      className={`select-label u-font-md${inline ? " inline" : ""}`}
      htmlFor={labelId}
    >
      <div className="select-label-inner u-mr-xs">
        {label || (
          <>
            (missing <code>label</code> prop in <code>Select</code>{" "}
            component)
          </>
        )}
      </div>

      <div className="select-inner">
        <select
          className="select"
          id={labelId}
          value={selection}
          onChange={onChange}
        >
          {options.map((option) => (
            <option value={option.value} key={`${option.value}-option`}>
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDownIcon />
      </div>
    </label>
  );
}
