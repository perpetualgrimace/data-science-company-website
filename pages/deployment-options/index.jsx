import DefaultLayout from "/components/layout/DefaultLayout";

import Tabs from "/components/layout/components/Tabs";

import Tag from "/components/common/Tag";

import HomeIcon from "/components/icons/HomeIcon";
import CreditCardIcon from "/components/icons/CreditCardIcon";
import CloudIcon from "/components/icons/CloudIcon";

const tabs = [
  {
    slug: "deploy",
    buttonText: "Deploy",
    title: "Deploy",
    subtitle: "on your own environment",
    content: (
      <>
        <p>
          Andalusia works in your own environment and comes with a clear
          deployment guide and support.
        </p>
        <p>
          Work with our partner Algorithmi to handle all deployment
          requirements as per Andalusia guidelines, end-to-end.
        </p>
      </>
    ),
    Icon: <HomeIcon />,
    theme: "cornflower",
    logos: [
      {
        slug: "algorithmi",
        alt: "Algorithmi",
      },
    ],
  },
  {
    slug: "buy",
    buttonText: "Buy",
    title: "Buy",
    subtitle: "a pre-deployed version on Andalusia procured hardware",
    content: (
      <>
        <p>
          If you are in a new environment without IT or need a quick
          parallel set-up installed, Andalusia can pre-deploy on hardware
          and deliver that to your premise.
        </p>
        <Tag theme="salmon">Coming soon</Tag>
      </>
    ),
    Icon: <CreditCardIcon />,
    theme: "salmon",
  },
  {
    slug: "access",
    buttonText: "Access",
    title: "Access",
    subtitle: "Andalusia on soil using an on-soil cloud provider",
    content: (
      <>
        <Tag theme="malachite">Coming soon</Tag>
      </>
    ),
    Icon: <CloudIcon />,
    theme: "malachite",
  },
];

export default function DeploymentOptions() {
  return (
    <DefaultLayout slug="deployment-options">
      <section className="padded-section deployment-options-section u-text-l">
        <h1 className="u-text-c u-title">Deployment options</h1>

        <Tabs tabs={tabs} fontSize="lg" />
      </section>
    </DefaultLayout>
  );
}
