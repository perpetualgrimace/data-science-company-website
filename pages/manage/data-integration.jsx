import IframeLayout from "/components/layout/IframeLayout";

export default function DataIntegration() {
  return (
    <IframeLayout
      title="Data integration"
      slug="integration"
      src="http://averroes.andal.us:8000/jenkins/"
      loading="lazy"
    />
  );
}
