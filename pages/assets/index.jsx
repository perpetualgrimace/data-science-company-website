import assetsSummary from "/data/assetsSummary";

import DefaultLayout from "/components/layout/DefaultLayout";

import AssetTile from "/components/pages/assets/AssetTile";

export default function Assets() {
  const { serverStats, dataStats, engineStats, engagementStats } =
    assetsSummary;

  return (
    <DefaultLayout title="Asset viewer" slug="assets">
      <AssetTile
        href="/assets/servers"
        label="Servers"
        imgSrc="servers"
        stats={serverStats}
      />

      <AssetTile
        href="/assets/data"
        label="Data"
        imgSrc="data"
        stats={dataStats}
      />

      <AssetTile
        href="/assets/engines"
        label="Engines"
        imgSrc="engines"
        stats={engineStats}
      />
      <AssetTile
        href="/assets/engagements"
        label="Engagements"
        imgSrc="engagements"
        stats={engagementStats}
      />
    </DefaultLayout>
  );
}
