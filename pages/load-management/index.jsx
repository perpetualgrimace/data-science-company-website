import DefaultLayout from "/components/layout/DefaultLayout";
import RetinaImg from "/components/common/RetinaImg";

export default function LoadManagement() {
  return (
    <DefaultLayout slug="load-management">
      <section className="fullscreen-section load-management-section">
        <h1 className="u-text-c u-title">Load management, simplified</h1>

        <div className="darkglass load-management-intro">
          <h2 className="u-font-xl u-mb-sm">Keep it separated</h2>
          <p className="u-font-lg u-mb-sm">
            Use your own computation and storage resources to host unique
            versions of data tables, without affecting the rest of your
            organization.
          </p>
          <p className="u-font-lg">
            Your existing tools can be connected via multiple interfaces
            like JDBC/Spark.
          </p>
        </div>

        <div className="load-management-row">
          <div className="darkglass load-management-col u-text-l-c ">
            <h2 className="u-font-lg u-mb-sm">Without Andalusia</h2>
            <p className="u-font-md">
              IT must coordinate across teams, potentially restricting
              data science activities in order to ensure resource
              availability to other teams and functions
            </p>

            <RetinaImg
              className="load-management-img"
              file="diagrams/without-andalusia"
              alt="The data science team causes a high, unpredictable load in shared org assets, while the IT team must coordinate load management. Everyone involved is nervous."
            />
          </div>

          <div className="darkglass load-management-col u-text-l-c ">
            <h2 className="u-font-lg u-mb-sm">With Andalusia</h2>
            <p className="u-font-md">
              Data scientists interact with Andalusia independently from
              the rest of the organization, removing IT resource
              coordination responsibilities
            </p>

            <RetinaImg
              className="load-management-img"
              file="diagrams/with-andalusia"
              alt="The data science team no longer interacts with shared org assets, so the IT team has no need for complex load management coordination. Everyone involved is at ease."
            />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
