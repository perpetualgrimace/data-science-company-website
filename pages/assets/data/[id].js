import slugify from "/helpers/slugify";

import tables from "/data/tables.json";

import DefaultLayout from "/components/layout/DefaultLayout";
import Table from "/components/common/Table";

export const getStaticProps = async ({ params }) => {
  const currTable = tables.filter(
    (table) => slugify(table.id) === params.id
  )[0];
  return {
    props: {
      table: currTable,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = tables.map((table) => ({
    params: { id: slugify(table.id) },
  }));
  return { paths, fallback: false };
};

export default ({ table }) => (
  <DefaultLayout title={table.name || table.id} slug="data">
    {table.data ? (
      <Table data={table.data} />
    ) : (
      <p className="u-font-lg">
        <strong>Error</strong>: missing or malformed data
      </p>
    )}
  </DefaultLayout>
);
