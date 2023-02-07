import { pathPrefix } from "/environment.js";

import ServerLocation from "./ServerLocation";
import StatusIcon from "/components/common/StatusIcon";

export default function ServerTile(props) {
  const { label, remote, servers, onClick, isSelected } = props;

  return (
    <div className="server-tile">
      <button
        className="server-tile-button tile darkglass"
        onClick={onClick}
        aria-pressed={isSelected}
      >
        <div className="server-tile-inner u-m-auto">
          <h3 className="server-tile-title u-font-lg u-mb-0">{label}</h3>
          <ServerLocation remote={remote} />

          <ul className="server-tile-list u-m-auto">
            {servers && servers.length ? (
              servers.map((server) => (
                <li className="server-tile-item" key={server.name}>
                  <h3 className="server-label u-font-md u-mb-xs">
                    {server.name} &nbsp;
                    <StatusIcon status={server.status} />
                  </h3>
                  <img
                    className="server-img"
                    src={`/${pathPrefix}/icons/server.png`}
                    srcSet={`
                      /${pathPrefix}/icons/server.png 1x,
                      /${pathPrefix}/icons/server@2x.png 2x`}
                    alt=""
                    draggable="false"
                    loading="lazy"
                  />
                </li>
              ))
            ) : (
              // empty state
              <h3 className="server-label u-font-md u-mb-xs">
                No servers for {label} yet
              </h3>
            )}
          </ul>
        </div>
      </button>
    </div>
  );
}
