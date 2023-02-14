import Link from "next/link";

import DefaultLayout from "/components/layout/DefaultLayout";

import Tabs from "/components/layout/components/Tabs";

import TerminalIcon from "/components/icons/TerminalIcon";
import DBSearchIcon from "/components/icons/DBSearchIcon";
import SpeedIcon from "/components/icons/SpeedIcon";

const tabs = [
  {
    slug: "code",
    buttonText: "Code",
    title: "Code computational documents",
    subtitle: "with Jupyter Notebook",
    content: (
      <>
        <p>
          Benefit from having a familiar Jupyter notebook that runs
          on-prem and can access on-prem data. Benefit from Andalusia’s
          on-prem storage and computation to allow for running your own
          analysis using your own computation and storing your own
          versions of the tables you want to analyze. This comes
          pre-loaded with popular libraries that you can use in your
          restricted environment.
        </p>
        <p>
          We also provide one-way updates to you via your email to allow
          you to patch new libraries and updates for newer versions of
          Jupyter Notebook.
        </p>
      </>
    ),
    Icon: <TerminalIcon />,
    theme: "cornflower",
    logos: [
      {
        slug: "jupyter",
        alt: "Jupyter",
        url: "https://jupyter.org/",
      },
    ],
  },
  {
    slug: "explore-and-visualize",
    buttonText: "Explore & visualize data",
    title: "Explore & visualize",
    subtitle: "using Apache Superset",
    content: (
      <>
        <p>
          Gain access to Apache Superset on-prem using your on-prem data.
          This benefits from Andalusia’s computation and storage.
        </p>
        <p>
          Don’t worry about updates — we will regularly send you update
          patches.
        </p>
      </>
    ),
    Icon: <DBSearchIcon />,
    theme: "salmon",
    logos: [
      {
        slug: "apache-superset",
        alt: "Apache Superset",
        url: "https://superset.apache.org/",
      },
    ],
  },
  {
    slug: "improve-performance",
    buttonText: "Improve performance",
    title: "Improve performance",
    subtitle:
      "of your existing tools by connecting them to Andalusia computation and storage resources",
    content: (
      <>
        <p>
          Improve performance of your existing tools by connecting them to
          Andalusia computation and storage resources via Apache Spark.
          This also allows you to have dedicated performance and storage
          space to save your own versions of tables.
        </p>
        <p>
          If you currently use software that can benefit from Andalusia,
          please 
          <Link href="/contact" passHref>
            <a>contact us</a>
          </Link>
          .
        </p>
      </>
    ),
    Icon: <SpeedIcon />,
    theme: "malachite",
    logos: [
      {
        slug: "alteryx",
        alt: "Alteryx",
        url: "https://www.alteryx.com/",
      },
      {
        slug: "tableau",
        alt: "Tableau",
        url: "https://www.tableau.com/",
      },
      {
        slug: "dataiku",
        alt: "Data Iku",
        url: "https://www.dataiku.com/",
      },
      {
        slug: "apache-spark",
        alt: "Apache Spark",
        url: "https://spark.apache.org/",
      },
    ],
  },
];

export default function Interfaces() {
  return (
    <DefaultLayout slug="interfaces">
      <section className="padded-section interfaces-section u-text-l">
        <h1 className="u-text-c u-title">Interfaces</h1>

        <Tabs tabs={tabs} fontSize="md" />
      </section>
    </DefaultLayout>
  );
}
