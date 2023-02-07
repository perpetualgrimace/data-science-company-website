import ServerLocation from "./ServerLocation";
import ServerStatTable from "./ServerStatTable";

export default function ServerCard(props) {
  const { label, remote, summary, servers } = props;

  return (
    <div className="server-card">
      <div className="server-card-col">
        <h2 className="server-card-heading u-mb-0">{label}</h2>
        <ServerLocation remote={remote} />

        <ServerStatTable server={summary} />
      </div>

      {servers && servers.length ? (
        servers.map((server) => (
          <div className="server-card-col" key={server.id}>
            <h3 className="server-card-heading u-font-lg u-mb-0">
              {server.name}
            </h3>
            <p className="server-card-subhead u-font-xs">
              ID: {server.id}
            </p>

            <ServerStatTable server={server} />
          </div>
        ))
      ) : (
        // empty state
        <h3 className="server-label u-font-md u-mb-xs">
          No servers for {label} yet
        </h3>
      )}
    </div>
  );
}
