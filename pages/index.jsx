import DefaultLayout from "/components/layout/DefaultLayout";

import Diamond from "/components/layout/components/Diamond";
import DiamondCard from "/components/layout/components/DiamondCard";
import IconBullet from "/components/common/IconBullet";

import ExpandHorizontalIcon from "/components/icons/ExpandHorizontalIcon";
import JupyterIcon from "/components/icons/JupyterIcon";
import UXIcon from "/components/icons/UXIcon";
import ExpandVerticalIcon from "/components/icons/ExpandVerticalIcon";
import TerminalIcon from "/components/icons/TerminalIcon";
import DBSearchIcon from "/components/icons/DBSearchIcon";
import SpeedIcon from "/components/icons/SpeedIcon";
import HomeIcon from "/components/icons/HomeIcon";
import CreditCardIcon from "/components/icons/CreditCardIcon";
import CloudIcon from "/components/icons/CloudIcon";

export default function Home() {
  return (
    <DefaultLayout slug="home">
      <section className="fullscreen-section home-intro-section u-text-l">
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
            Icon={<JupyterIcon />}
          />
          <IconBullet
            title="Fully on-premise solution by default"
            text="but maintained by us to ensure you get higher frequency tech updates and data science packages funneled through a singular Andalusia trusted repository"
            theme="mulberry"
            Icon={<UXIcon />}
          />
          <IconBullet
            title="Flexible end-to-end playground dedicated to your needs"
            text="Andalusia keeps developers happy by solving complex load management problems."
            theme="cornflower"
            Icon={<ExpandHorizontalIcon />}
            moreHref="/load-management"
          />
          <IconBullet
            title="Run small or large deployments"
            text="Scale up or down as your needs change. Pay for what you use."
            theme="malachite"
            Icon={<ExpandVerticalIcon />}
          />
        </div>
      </section>

      <section className="fullscreen-section home-interfaces-section u-text-l">
        <h2 className="u-text-c u-title">Interfaces</h2>

        <Diamond>
          <DiamondCard
            title="Code"
            subtitle="computational documents with Jupyter Notebook"
            slug="/interfaces?activetab=code"
            theme="cornflower"
            Icon={<TerminalIcon />}
          />
          <DiamondCard
            title="Explore & visualize"
            subtitle="data using Apache Superset"
            slug="/interfaces?activetab=explore-and-visualize"
            theme="salmon"
            Icon={<DBSearchIcon />}
          />
          <DiamondCard
            title="Improve performance"
            subtitle="of your existing tools with Andalusia computation and storage resources"
            slug="/interfaces?activetab=improve-performance"
            theme="malachite"
            Icon={<SpeedIcon />}
          />
        </Diamond>
      </section>

      <section className="fullscreen-section home-interfaces-section u-text-l">
        <h2 className="u-text-c u-title">Deployment options</h2>

        <Diamond>
          <DiamondCard
            title="Deploy"
            subtitle="on your own environment"
            slug="/deployment-options?activetab=deploy"
            theme="cornflower"
            Icon={<HomeIcon />}
          />
          <DiamondCard
            title="Buy"
            subtitle="a pre-deployed version on Andalusia-procured hardware"
            slug="/deployment-options?activetab=buy"
            theme="salmon"
            Icon={<CreditCardIcon />}
          />
          <DiamondCard
            title="Access"
            subtitle="Andalusia using an on-soil cloud provider"
            slug="/deployment-options?activetab=access"
            theme="malachite"
            Icon={<CloudIcon />}
          />
        </Diamond>
      </section>
    </DefaultLayout>
  );
}
