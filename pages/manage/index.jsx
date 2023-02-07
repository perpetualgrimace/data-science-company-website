import DefaultLayout from "/components/layout/DefaultLayout";
import HomeSection from "/components/pages/home/HomeSection";
import HomeItem from "/components/pages/home/HomeItem";

export default function Manage() {
  return (
    <DefaultLayout title="Manage data" slug="manage">
      <HomeSection>
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
    </DefaultLayout>
  );
}
