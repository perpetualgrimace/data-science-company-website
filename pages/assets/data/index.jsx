import { useState } from "react";
import { useAtom } from "jotai";

import marts from "/data/marts.json";
import tables from "/data/tables.json";

import { dataViewAtom } from "/helpers/atoms/dataViewAtom";
import { sortByAtom } from "/helpers/atoms/sortByAtom";

import DefaultLayout from "/components/layout/DefaultLayout";
import Button from "/components/controls/Button";
import ButtonGroup from "/components/controls/ButtonGroup";
import FilterSearch from "/components/controls/FilterSearch";
import Select from "/components/controls/Select";

import DataMartList from "/components/pages/assets/data/DataMartList";
import DataLakeTable from "/components/pages/assets/data/DataLakeTable";

const lakeSortOptions = [
  { value: "name", label: "Name" },
  { value: "created", label: "Date created" },
  { value: "size", label: "Size" },
];
const martSortOptions = [
  { value: "name", label: "Name" },
  { value: "created", label: "Date created" },
  { value: "quality", label: "Quality" },
];

export default function Data() {
  const [view, setView] = useAtom(dataViewAtom);
  const [sortBy, setSortBy] = useAtom(sortByAtom);
  const [searchVal, setSearchVal] = useState("");

  const options = view === "lake" ? lakeSortOptions : martSortOptions;

  function handleSortByChange(event) {
    setSortBy(event.target.value);
  }
  function handleSearchValChange(event) {
    setSearchVal(event.target.value);
  }

  return (
    <DefaultLayout
      title="Data"
      slug="data"
      controls={
        <>
          <ButtonGroup toggle label="select view">
            <Button
              aria-pressed={view === "lake"}
              onClick={() => setView("lake")}
              fontSize="md"
            >
              Data lake
            </Button>
            <Button
              aria-pressed={view === "marts"}
              onClick={() => setView("marts")}
              fontSize="md"
            >
              Data marts
            </Button>
          </ButtonGroup>

          <Select
            label="Sort by"
            options={options}
            selection={sortBy}
            onChange={handleSortByChange}
            inline
          />

          <FilterSearch
            label="Search data..."
            onChange={handleSearchValChange}
          />
        </>
      }
    >
      {view === "lake" ? (
        <DataLakeTable
          data={tables}
          sortKey={sortBy}
          searchVal={searchVal}
        />
      ) : (
        <DataMartList
          data={marts}
          sortKey={sortBy}
          searchVal={searchVal}
        />
      )}
    </DefaultLayout>
  );
}
