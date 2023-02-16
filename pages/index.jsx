import DefaultLayout from "/components/layout/DefaultLayout";

import IntroSection from "/components/layout/components/IntroSection";
import DiamondSection from "/components/layout/components/DiamondSection";
import TextSection from "/components/layout/components/TextSection";

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

const sections = [
  {
    title: "Modern data science for restrictive environments",
    shortTitle: "Why Andalusia?",
    slug: "intro",
    subtitle: "Why Andalusia platform?",
    layout: "intro",
    bullets: [
      {
        title: "Code using Jupyter notebook",
        text: "supported by a distributed computation layer run by Apache Spark",
        theme: "salmon",
        Icon: <JupyterIcon />,
      },
      {
        title: "Fully on-premise solution by default",
        text: "but maintained by us to ensure you get higher frequency tech updates and data science packages funneled through a singular Andalusia trusted repository",
        theme: "mulberry",
        Icon: <UXIcon />,
      },
      {
        title: "Flexible end-to-end playground dedicated to your needs",
        text: "Andalusia keeps developers happy by solving complex load management problems.",
        theme: "cornflower",
        Icon: <ExpandHorizontalIcon />,
      },
      {
        moreHref: "/load-management",
        title: "Run small or large deployments",
        text: "Scale up or down as your needs change. Pay for what you use.",
        theme: "malachite",
        Icon: <ExpandVerticalIcon />,
      },
    ],
  },
  {
    title: "Interfaces",
    slug: "interfaces",
    layout: "diamond",
    cards: [
      {
        title: "Code",
        subtitle: "computational documents with Jupyter Notebook",
        slug: "/interfaces#activeTab=0",
        theme: "cornflower",
        Icon: <TerminalIcon />,
      },
      {
        title: "Explore & visualize",
        subtitle: "data using Apache Superset",
        slug: "/interfaces#activeTab=1",
        theme: "salmon",
        Icon: <DBSearchIcon />,
      },
      {
        title: "Improve performance",
        subtitle:
          "of your existing tools with Andalusia computation and storage resources",
        slug: "/interfaces#activeTab=2",
        theme: "malachite",
        Icon: <SpeedIcon />,
      },
    ],
  },
  {
    title: (
      <>
        About <span className="u-visually-hidden">Andalusia</span>
      </>
    ),
    slug: "about-andalusia",
    text: (
      <>
        <p>
          We believe our customers should always have high bandwidth and
          highly flexible access to their data-assets for analysis and
          reporting purposes.
        </p>
        <p>
          Andalusia is building technologies to allow its customers to
          have improved access to their data assets by creating parallel
          stores and computation from inflexible systems that have
          potential access risk.
        </p>
      </>
    ),
  },
  {
    title: "Deployment options",
    slug: "deployment-options",
    layout: "diamond",
    cards: [
      {
        title: "Deploy",
        subtitle: "on your own environment",
        slug: "/deployment-options#activeTab=0",
        theme: "cornflower",
        Icon: <HomeIcon />,
      },
      {
        title: "Buy",
        subtitle: "a pre-deployed version on Andalusia-procured hardware",
        slug: "/deployment-options#activeTab=1",
        theme: "salmon",
        Icon: <CreditCardIcon />,
      },
      {
        title: "Access",
        subtitle: "Andalusia using an on-soil cloud provider",
        slug: "/deployment-options#activeTab=2",
        theme: "malachite",
        Icon: <CloudIcon />,
      },
    ],
  },
];

function generateLayout(section) {
  if (section?.layout === "intro") {
    return (
      <IntroSection
        key={section?.title}
        title={section?.title}
        slug={section?.slug}
        subtitle={section?.subtitle}
        bullets={section?.bullets}
      />
    );
  }
  // diamond section
  else if (section?.layout === "diamond") {
    return (
      <DiamondSection
        key={section?.title}
        title={section?.title}
        slug={section?.slug}
        cards={section?.cards}
      />
    );
  }
  // text section assumed
  else {
    return (
      <TextSection
        key={section?.title}
        title={section?.title}
        slug={section?.slug}
      >
        {section?.text}
      </TextSection>
    );
  }
}

export default function Home() {
  return (
    <DefaultLayout slug="home" sections={sections}>
      {sections?.map((section) => generateLayout(section))}
    </DefaultLayout>
  );
}
