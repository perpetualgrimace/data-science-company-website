export default function SubmitForm(props) {
  const { isVisible, children } = props;

  return (
    <div
      className={`trial-followup-form trial-card darkglass u-mh-auto u-mb-md is-${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <h2 className="u-text-c">Submit trial request</h2>

      {children}
    </div>
  );
}
