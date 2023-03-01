import { Field } from "formik";

import WarningIcon from "/components/icons/WarningIcon";

export default function TextField(props) {
  const {
    labelText,
    placeholder,
    name,
    type,
    fontSize,
    touched,
    errors,
    as,
    rows,
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
        />
      </label>

      {touched[[name]] && errors[[name]] && (
        <span className="text-field-alert">
          <WarningIcon /> {errors[[name]]}
        </span>
      )}
    </p>
  );
}
