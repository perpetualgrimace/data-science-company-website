import DefaultLayout from "/components/layout/DefaultLayout";
import RetinaImg from "/components/common/RetinaImg";

export default function SystemDiagram() {
  return (
    <DefaultLayout slug="system-diagram">
      <section className="fullscreen-section load-management-section">
        <h1 className="u-text-c u-title">System diagram</h1>

        <RetinaImg
          className="system-diagram-img u-mh-auto"
          file="diagrams/system-diagram"
          alt="The data science team no longer interacts with shared org assets, so the IT team has no need for complex load management coordination. Everyone involved is at ease."
        />
      </section>
    </DefaultLayout>
  );
}
