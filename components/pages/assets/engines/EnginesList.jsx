import { useAtom } from "jotai";
import moment from "moment";

import { dateFormat } from "/consts";

import { activeAccordionPanelAtom } from "/helpers/atoms/activeAccordionPanelAtom";
import filterDataByQuery from "/helpers/filterDataByQuery";
import sortArrayByObjKey from "/helpers/sortArrayByObjKey";
import toPercentage from "/helpers/toPercentage";

import Accordion from "/components/common/Accordion";
import AccordionPanel from "/components/common/Accordion/AccordionPanel";
import AccordionPanelColumn from "/components/common/Accordion/AccordionPanelColumn";

export default function EnginesList(props) {
  const { data, sortKey, searchVal } = props;

  const filteredData = filterDataByQuery(data, searchVal);
  const sortedData = sortArrayByObjKey(filteredData, sortKey);

  const [openPanelId, setOpenPanelId] = useAtom(activeAccordionPanelAtom);

  return (
    <Accordion>
      {sortedData.map((engine) => (
        <AccordionPanel
          key={engine.id}
          headingLabel={engine.name}
          isOpen={openPanelId === engine.id}
          onClick={() =>
            setOpenPanelId(engine.id !== openPanelId ? engine.id : false)
          }
          meta={[
            {
              label: "Created",
              value: moment(engine.created).format(dateFormat),
            },
            {
              label: "Predictiveness",
              value: toPercentage(engine.predictiveness),
            },
          ]}
        >
          <AccordionPanelColumn title="Description">
            <p className="u-font-xs">{engine.description}</p>
          </AccordionPanelColumn>
        </AccordionPanel>
      ))}
    </Accordion>
  );
}
