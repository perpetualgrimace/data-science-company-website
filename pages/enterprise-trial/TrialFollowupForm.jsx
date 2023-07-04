import Checkbox from "/components/controls/Checkbox";
import Button from "/components/controls/Button";
import TextField from "/components/controls/TextField";
import EllipsisIcon from "/components/icons/EllipsisIcon";
import SendIcon from "/components/icons/SendIcon";

export default function SubmitForm(props) {
  const {
    title,
    isVisible,
    isSubmitting,
    touched,
    errors,
    showTermsToggle,
    handleTermsToggle,
    focusRef,
  } = props;

  if (touched === undefined || errors === undefined) return null;

  return (
    <div
      className={`trial-followup-form trial-card darkglass u-mh-auto u-mb-md is-${
        isVisible ? "visible" : "hidden"
      }`}
    >
      {title && <h2 className="u-text-c">{title}</h2>}

      <TextField
        labelText="Your name"
        placeholder="Firstname Lastname"
        name="name"
        fontSize="md"
        touched={touched}
        errors={errors}
        disabled={!isVisible}
        refs={focusRef}
      />
      <TextField
        labelText="Company name"
        placeholder="Your Company"
        name="company"
        fontSize="md"
        touched={touched}
        errors={errors}
        disabled={!isVisible}
      />
      <TextField
        labelText="Your role"
        placeholder="i.e., Data Scientist"
        name="role"
        fontSize="md"
        touched={touched}
        errors={errors}
        disabled={!isVisible}
      />
      <TextField
        labelText="Contact email address"
        placeholder="your@emailaddress.com"
        name="email"
        fontSize="md"
        touched={touched}
        errors={errors}
        disabled={!isVisible}
      />

      <TextField
        labelText="Company location"
        placeholder="i.e., United States"
        name="location"
        fontSize="md"
        touched={touched}
        errors={errors}
        disabled={!isVisible}
      />

      {showTermsToggle && (
        <Checkbox
          name="terms"
          touched={touched}
          errors={errors}
          disabled={!isVisible}
          labelText={
            <>
              I agree to the{" "}
              <button
                type="button"
                className="link"
                onClick={handleTermsToggle}
                disabled={!isVisible}
                tabIndex={!isVisible ? "-1" : ""}
              >
                Terms of Service
              </button>
            </>
          }
        />
      )}

      <Button
        className="trial-followup-form-button"
        fontSize="md"
        fill
        type="submit"
        disabled={!isVisible || isSubmitting}
      >
        {isSubmitting ? (
          <>
            <EllipsisIcon /> Submitting
          </>
        ) : (
          <>
            <SendIcon /> Submit
          </>
        )}
      </Button>
    </div>
  );
}
