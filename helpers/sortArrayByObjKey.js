function getProgress(tasks) {
  const completedTasks = tasks.filter((task) => task.completionDate);
  return completedTasks.length / tasks.length;
}

export default function sortArrayByObjKey(array, sortKey) {
  let sortedObjArr = [...array];

  if (sortKey === "quality") {
    sortedObjArr.sort((a, b) => {
      if (a.quality.overall < b.quality.overall) return -1;
      if (a.quality.overall > b.quality.overall) return 1;
      return 0;
    });
  } else if (sortKey === "progress") {
    sortedObjArr.sort((a, b) => {
      if (getProgress(a.tasks) < getProgress(b.tasks)) return -1;
      if (getProgress(a.tasks) > getProgress(b.tasks)) return 1;
      return 0;
    });
  } else {
    sortedObjArr.sort((a, b) => {
      if (a[[sortKey]] < b[[sortKey]]) return -1;
      if (a[[sortKey]] > b[[sortKey]]) return 1;
      return 0;
    });
  }

  return sortedObjArr;
}
