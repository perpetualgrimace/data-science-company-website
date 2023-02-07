import moment from "moment";

import uppercaseFirst from "/helpers/uppercaseFirst";
import gbToTb from "/helpers/gbToTb";
import toPercentage from "/helpers/toPercentage";

import StatusIcon from "/components/common/StatusIcon";

export default function ServerStatTable(props) {
  const {
    serverCount,
    status,
    upSince,
    utilization,
    diskUsage,
    capacity,
    ram,
  } = props.server;

  return (
    <table className="server-stat-table u-font-md">
      <tbody>
        {serverCount ? (
          <tr>
            <th>Servers:</th>
            <td>{serverCount}</td>
          </tr>
        ) : (
          <tr>
            <th>Status:</th>
            <td>
              {uppercaseFirst(status)} <StatusIcon status={status} />
            </td>
          </tr>
        )}

        {upSince && (
          <tr>
            <th>Up since:</th>
            <td>{moment(upSince).fromNow()}</td>
          </tr>
        )}

        <tr>
          <th>Utilization:</th>
          <td>{toPercentage(utilization)}</td>
        </tr>

        <tr>
          <th className="capacity-cell">Capacity:</th>
          <td className="capacity-cell">
            {gbToTb(diskUsage)} / {gbToTb(capacity)}
            <span className="capacity-percentage u-font-xs">
              ({toPercentage((capacity - diskUsage) / capacity)}{" "}
              available)
            </span>
          </td>
        </tr>

        <tr>
          <th>Ram:</th>
          <td>{ram} GB</td>
        </tr>
      </tbody>
    </table>
  );
}
