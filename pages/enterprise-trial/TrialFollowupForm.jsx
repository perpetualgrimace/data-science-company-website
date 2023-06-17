export default function SubmitForm(props) {
  const { isVisible, children } = props;

  return (
    <div
      className={`trial-followup-form trial-card darkglass u-mh-auto u-mb-md is-${
        isVisible ? "visible" : "hidden"
      }`}
      name="Andalusia-website contact form"
      data-netlify={true}
    >
      <h2 className="u-text-c">Start free 3 month trial</h2>

      {children}
    </div>
  );
}
