import { useState } from "react";
import { useAtom } from "jotai";

import engines from "/data/engines.json";

import { sortByAtom } from "/helpers/atoms/sortByAtom";

import DefaultLayout from "/components/layout/DefaultLayout";
import Select from "/components/controls/Select";
import FilterSearch from "/components/controls/FilterSearch";

import EnginesList from "/components/pages/assets/engines/EnginesList";

const sortOptions = [
  { value: "name", label: "Name" },
  { value: "created", label: "Date created" },
  { value: "predictiveness", label: "Predictiveness" },
];

export default function Engines() {
  const [sortBy, setSortBy] = useAtom(sortByAtom);
  const [searchVal, setSearchVal] = useState("");

  function handleSortByChange(event) {
    setSortBy(event.target.value);
  }
  function handleSearchValChange(event) {
    setSearchVal(event.target.value);
  }

  return (
    <DefaultLayout
      title="Engines"
      slug="engines"
      controls={
        <>
          <Select
            label="Sort by"
            options={sortOptions}
            selection={sortBy}
            onChange={handleSortByChange}
            inline
          />
          <FilterSearch
            label="Search engines..."
            onChange={handleSearchValChange}
          />
        </>
      }
    >
      <EnginesList
        data={engines}
        sortKey={sortBy}
        searchVal={searchVal}
      />
    </DefaultLayout>
  );
}
