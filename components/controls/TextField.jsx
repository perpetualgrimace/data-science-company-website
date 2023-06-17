import { Field } from "formik";

import WarningIcon from "/components/icons/WarningIcon";

export default function TextField(props) {
  const {
    labelText,
    placeholder,
    name,
    type,
    fontSize,
    helpText,
    touched,
    errors,
    as,
    rows,
    autoFocus,
    min,
    max,
    step,
    disabled,
    refs,
  } = props;

  return (
    <p className="text-field u-mb-lg">
      <label className="text-field-label u-font-md">
        {labelText}

        <Field
          className={`text-field-input u-font-${fontSize || "lg"}${
            touched[[name]] && errors[[name]] ? " is-error" : ""
          }`}
          id={name}
          name={name}
          placeholder={placeholder || labelText}
          type={type}
          as={as}
          rows={rows || 5}
          autoFocus={autoFocus}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          tabIndex={disabled ? -1 : null}
          innerRef={refs}
        />
      </label>

      {helpText && (
        <span className="text-field-help u-font-md">{helpText}</span>
      )}

      {touched[[name]] && errors[[name]] && (
        <span className="text-field-alert">
          <WarningIcon /> {errors[[name]]}
        </span>
      )}
    </p>
  );
}
