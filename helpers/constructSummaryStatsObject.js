import getServerStatAverage from "/helpers/getServerStatAverage";
import getServerStatSum from "/helpers/getServerStatSum";

export default function constructSummaryStatsObject(servers) {
  const firstUpDate = servers[0].upSince;
  const averageUtilization = getServerStatAverage(servers, "utilization");
  const totalDiskUsage = getServerStatSum(servers, "diskUsage");
  const totalCapacity = getServerStatSum(servers, "capacity");
  const totalRam = getServerStatSum(servers, "ram");

  return {
    serverCount: servers.length,
    upSince: firstUpDate,
    utilization: averageUtilization,
    diskUsage: totalDiskUsage,
    capacity: totalCapacity,
    ram: totalRam,
  };
}
