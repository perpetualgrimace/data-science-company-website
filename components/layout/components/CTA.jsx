import Button from "components/controls/Button";

export default function CTA(props) {
  const { title } = props;
  return (
    <div className="cta darkglass u-text-c u-mh-auto">
      <h2 className="cta-title u-mb-lg">
        {title || "missing `title` prop"}
      </h2>

      <p className="cta-links u-font-md">
        <Button
          className="cta-link"
          fontSize="md"
          href="enterprise-trial"
        >
          <span className="u-visually-hidden-sm">start </span>enterprise
          trial
        </Button>

        <span className="cta-or"> or </span>

        <Button
          className="cta-link"
          fontSize="md"
          href="https://averroes.andal.us"
        >
          <span className="u-visually-hidden-sm">test </span>hosted
          version
        </Button>
      </p>
    </div>
  );
}
