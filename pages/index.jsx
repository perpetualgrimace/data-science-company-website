import DefaultLayout from "/components/layout/DefaultLayout";

import HomeSection from "/components/pages/home/HomeSection";
import HomeItem from "/components/pages/home/HomeItem";

export default function Home() {
  return (
    <DefaultLayout title="Welcome" slug="home">
      <HomeSection sectionTitle="Manage data">
        <HomeItem
          href="/manage/jupyterhub"
          imgSrc="jupyterhub-logo"
          altText="Jupyter Hub"
          outbound="true"
        />
        <HomeItem
          href="/manage/data-integration"
          imgSrc="data-integration-icon"
          label="Data integration"
          altText=""
          outbound="true"
        />
        <HomeItem
          href="/manage/business-intelligence"
          imgSrc="visualizations-icon"
          label="Business intelligence"
          altText=""
          outbound="true"
        />
      </HomeSection>

      <HomeSection sectionTitle="Asset viewer">
        <HomeItem
          href="/assets/servers"
          imgSrc="servers-icon"
          label="Servers"
          altText=""
        />
        <HomeItem
          href="/assets/data"
          imgSrc="table-icon"
          label="Data"
          altText=""
        />
        <HomeItem
          href="/assets/engines"
          imgSrc="prediction-engines-icon"
          label="Engines"
          altText=""
        />
        <HomeItem
          href="/assets/engagements"
          imgSrc="checklist-icon"
          label="Engagements"
          altText=""
        />
      </HomeSection>
    </DefaultLayout>
  );
}
