import { useAtom } from "jotai";

import servers from "/data/servers.json";

import { serverSelectAtom } from "/helpers/atoms/serverSelectAtom";
import constructSummaryStatsObject from "/helpers/constructSummaryStatsObject";

import DefaultLayout from "/components/layout/DefaultLayout";
import Tooltip from "/components/common/Tooltip";
import ServerTile from "/components/pages/assets/servers/ServerTile";
import ServerCard from "/components/pages/assets/servers/ServerCard";

export default function Servers() {
  const { Muthalath, Mudavar, Muraba } = servers;

  const [currServer, setCurrServer] = useAtom(serverSelectAtom);

  const summary = constructSummaryStatsObject(
    servers[[currServer]].servers
  );

  return (
    <DefaultLayout title="Servers" slug="servers">
      <h2 className="u-mt-0">Server flow</h2>

      <div className="servers-grid u-mb-lg">
        <ServerTile
          label="Muthalath"
          remote={Muthalath.remote}
          servers={Muthalath.servers}
          isSelected={currServer === "Muthalath"}
          onClick={() => setCurrServer("Muthalath")}
        />
        <ServerTile
          label="Mudavar"
          remote={Mudavar.remote}
          servers={Mudavar.servers}
          isSelected={currServer === "Mudavar"}
          onClick={() => setCurrServer("Mudavar")}
        />
        <ServerTile
          label="Muraba"
          remote={Muraba.remote}
          servers={Muraba.servers}
          isSelected={currServer === "Muraba"}
          onClick={() => setCurrServer("Muraba")}
        />
      </div>

      <Tooltip className={`server-tooltip ${currServer}-is-selected`}>
        <ServerCard
          label={currServer}
          remote={servers[[currServer]].remote}
          servers={servers[[currServer]].servers}
          summary={summary}
        />
      </Tooltip>
    </DefaultLayout>
  );
}
