import { useAtom } from "jotai";
import moment from "moment";

import { dateFormat } from "/consts";

import { activeAccordionPanelAtom } from "/helpers/atoms/activeAccordionPanelAtom";
import filterDataByQuery from "/helpers/filterDataByQuery";
import sortArrayByObjKey from "/helpers/sortArrayByObjKey";
import tasksToLineChartObj from "/helpers/tasksToLineChartObj";
import toPercentage from "/helpers/toPercentage";

import Accordion from "/components/common/Accordion";
import AccordionPanel from "/components/common/Accordion/AccordionPanel";
import AccordionPanelColumn from "/components/common/Accordion/AccordionPanelColumn";
import ProgressPill from "/components/common/ProgressPill";

import TaskItem from "/components/pages/assets/engagements/TaskItem";

import LineChart from "/components/visualizations/LineChart";

function getCompletedTaskRatio(tasks) {
  const completedTasks = tasks.filter((task) => task.completionDate);
  return `${completedTasks.length}/${tasks.length}`;
}

function getCompletedTaskPercentage(tasks) {
  const completedTasks = tasks.filter((task) => task.completionDate);
  return toPercentage(completedTasks.length / tasks.length);
}

function filterArrayByObjKey(array, filterBy) {
  let filteredObjArr = [...array];

  if (filterBy === "incomplete") {
    return filteredObjArr.filter(
      (obj) => getCompletedTaskPercentage(obj.tasks) !== "100%"
    );
  } else if (filterBy === "complete") {
    return filteredObjArr.filter(
      (obj) => getCompletedTaskPercentage(obj.tasks) === "100%"
    );
  } else if (filterBy === "not yet started") {
    return filteredObjArr.filter(
      (obj) => !parseInt(getCompletedTaskPercentage(obj.tasks))
    );
  }

  return filteredObjArr;
}

function shouldPrintStatusChart(engagement) {
  if (
    engagement.tasks &&
    engagement.tasks.length &&
    engagement.startDate &&
    engagement.eta
  ) {
    return true;
  }
}

function shouldPrintEta(engagement) {
  if (
    engagement.eta &&
    engagement.tasks.filter((task) => !task.completionDate).length
  ) {
    return true;
  }
}

export default function EngagementsList(props) {
  const { data, filterKey, sortKey, searchVal } = props;
  const filteredData = filterDataByQuery(
    filterArrayByObjKey(data, filterKey),
    searchVal
  );
  const sortedData = sortArrayByObjKey(filteredData, sortKey);

  const [openPanelId, setOpenPanelId] = useAtom(activeAccordionPanelAtom);

  return (
    <Accordion>
      {sortedData.map((engagement) => (
        <AccordionPanel
          key={engagement.id}
          headingLabel={engagement.name}
          isOpen={openPanelId === engagement.id}
          onClick={() =>
            setOpenPanelId(
              engagement.id !== openPanelId ? engagement.id : false
            )
          }
          meta={
            engagement.tasks && engagement.tasks.length
              ? [
                  shouldPrintEta(engagement) === true && {
                    label: "ETA",
                    value:
                      moment(engagement.eta).format(dateFormat) || null,
                  },
                  {
                    label: "Tasks",
                    value: getCompletedTaskRatio(engagement.tasks),
                  },
                  {
                    label: "Progress",
                    value: (
                      <ProgressPill>
                        {getCompletedTaskPercentage(engagement.tasks)}
                      </ProgressPill>
                    ),
                  },
                ]
              : []
          }
        >
          <AccordionPanelColumn title="Description">
            <p className="u-font-xs">{engagement.description}</p>
          </AccordionPanelColumn>

          <AccordionPanelColumn title="Tasks">
            {engagement.tasks && engagement.tasks.length ? (
              <ul className="task-list">
                {engagement.tasks.map((task) => (
                  <TaskItem
                    completionDate={
                      task.completionDate &&
                      moment(task.completionDate).format(dateFormat)
                    }
                    key={`${engagement.description}-${task.title}`}
                  >
                    {task.title}
                  </TaskItem>
                ))}
              </ul>
            ) : (
              <p>No tasks yet</p>
            )}
          </AccordionPanelColumn>

          {shouldPrintStatusChart(engagement) && (
            <AccordionPanelColumn title="Status">
              <LineChart
                data={tasksToLineChartObj(engagement)}
                isComplete={
                  getCompletedTaskPercentage(engagement.tasks) === "100%"
                }
              />
            </AccordionPanelColumn>
          )}
        </AccordionPanel>
      ))}
    </Accordion>
  );
}
