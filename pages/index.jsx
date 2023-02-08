import DefaultLayout from "/components/layout/DefaultLayout";

import IconBullet from "/components/common/IconBullet";

export default function Home() {
  return (
    <DefaultLayout slug="home">
      <section className="section home-intro-section u-text-l">
        <h1 className="u-text-c u-title">
          Modern data science for restrictive environments
        </h1>

        <div className="darkglass">
          <h2 className="u-text-l-c u-mb-lg">Why Andalusia platform?</h2>

          <IconBullet
            title="Code using Jupyter notebook"
            text="supported by a distributed computation layer run by Apache
            Spark"
            theme="salmon"
          />
          <IconBullet
            title="Fully on-premise solution by default"
            text="but maintained by us to ensure you get higher frequency tech updates and data science packages funneled through a singular Andalusia trusted repository"
            theme="mulberry"
          />
          <IconBullet
            title="Flexible end-to-end playground dedicated to your needs"
            text="Andalusia keeps developers happy by solving complex load management problems."
            moreHref="/load-management"
            theme="cornflower"
          />
          <IconBullet
            title="Run small or large deployments"
            text="Scale up or down as your needs change. Pay for what you use."
            theme="malachite"
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
