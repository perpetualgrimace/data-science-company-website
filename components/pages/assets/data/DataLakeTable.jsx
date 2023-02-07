import Link from "next/link";
import moment from "moment";

import { dateFormat } from "/consts";

import filterDataByQuery from "/helpers/filterDataByQuery";
import slugify from "/helpers/slugify";
import sortArrayByObjKey from "/helpers/sortArrayByObjKey";

export default function DataLakeTable(props) {
  const { data, sortKey, searchVal } = props;

  const filteredData = filterDataByQuery(data, searchVal);
  const sortedData = sortArrayByObjKey(filteredData, sortKey);

  return (
    <table className="table data-lake-table">
      <thead className="data-lake-thead">
        <tr className="data-lake-tr">
          <th className="data-lake-th">Name</th>
          <th className="data-lake-th">Created</th>
          <th className="data-lake-th">Size</th>
          <th className="data-lake-th">Data mart</th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((table) => (
          <tr className="data-lake-tr" key={table.id}>
            <td className="data-lake-td">
              <Link href={`/assets/data/${slugify(table.id)}`}>
                <a className="data-lake-link">{table.name}</a>
              </Link>
            </td>
            <td className="data-lake-td">
              {moment(table.created).format(dateFormat)}
            </td>
            <td className="data-lake-td">{table.size}</td>
            <td className="data-lake-td">{table.mart}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
