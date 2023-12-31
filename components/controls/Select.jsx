import { Field } from "formik";

import WarningIcon from "/components/icons/WarningIcon";
import ChevronDownIcon from "/components/icons/ChevronDownIcon";

export default function Select(props) {
  const {
    labelText,
    options,
    name,
    selection,
    inline,
    touched,
    errors,
    disabled,
  } = props;

  return (
    <p className="select-outer u-mb-lg">
      <label
        className={`select-label u-font-md${inline ? " inline" : ""}${
          touched[[name]] && errors[[name]] ? " is-error" : ""
        }`}
        htmlFor={name}
      >
        <span className="select-label-inner u-mr-xs">
          {labelText || (
            <>
              (missing <code>labelText</code> prop in <code>Select</code>{" "}
              component)
            </>
          )}
        </span>

        <span className="select-inner">
          <Field
            className="select"
            id={name}
            name={name}
            value={selection}
            as="select"
            disabled={disabled}
            tabIndex={disabled ? "-1" : ""}
          >
            {options.map((option) => (
              <option value={option.value} key={`${option.value}-option`}>
                {option.label}
              </option>
            ))}
          </Field>

          <ChevronDownIcon />
        </span>
      </label>

      {touched[[name]] && errors[[name]] && (
        <span className="text-field-alert">
          <WarningIcon /> {errors[[name]]}
        </span>
      )}
    </p>
  );
}
