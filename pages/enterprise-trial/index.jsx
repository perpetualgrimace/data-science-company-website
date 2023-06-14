import DefaultLayout from "/components/layout/DefaultLayout";
import TrialConfig from "./TrialConfig";

export default function EnterpriseTrial() {
  return (
    <DefaultLayout slug="enterprise-trial" title="Enterprise trial">
      <section className="trial-section padded-section">
        <h1 className="u-text-c u-title">Enterprise trial</h1>
        <TrialConfig />
      </section>
    </DefaultLayout>
  );
}
