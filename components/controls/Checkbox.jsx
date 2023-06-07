import { Field } from "formik";

import WarningIcon from "/components/icons/WarningIcon";

export default function TextField(props) {
  const { labelText, name, fontSize, touched, errors, autoFocus } = props;

  return (
    <p className="checkbox-field u-mb-lg">
      <label className="checkbox-field-label u-font-md">
        <Field
          className={`checkbox-field-input u-font-${fontSize || "lg"}${
            touched[[name]] && errors[[name]] ? " is-error" : ""
          }`}
          id={name}
          name={name}
          autoFocus={autoFocus}
          type="checkbox"
        />

        <span className="checkbox-field-label-text">{labelText}</span>
      </label>

      {touched[[name]] && errors[[name]] && (
        <span className="checkbox-field-alert">
          <WarningIcon /> {errors[[name]]}
        </span>
      )}
    </p>
  );
}
