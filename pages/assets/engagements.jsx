import { useState } from "react";
import { useAtom } from "jotai";

import engagements from "/data/engagements.json";

import { sortByAtom } from "/helpers/atoms/sortByAtom";
import { filterByStatusAtom } from "/helpers/atoms/filterByStatusAtom";

import DefaultLayout from "/components/layout/DefaultLayout";
import Select from "/components/controls/Select";
import FilterSearch from "/components/controls/FilterSearch";

import EngagementsList from "/components/pages/assets/engagements/EngagementsList";

const sortOptions = [
  { value: "name", label: "Name" },
  { value: "eta", label: "ETA" },
  { value: "progress", label: "progress" },
];
const filterOptions = [
  { value: "all", label: "All engagements" },
  { value: "incomplete", label: "In progress" },
  { value: "complete", label: "Completed" },
  { value: "not yet started", label: "Not yet started" },
];

export default function Engagements() {
  const [sortBy, setSortBy] = useAtom(sortByAtom);
  const [filterBy, setFilterBy] = useAtom(filterByStatusAtom);
  const [searchVal, setSearchVal] = useState("");

  function handleSortByChange(event) {
    setSortBy(event.target.value);
  }
  function handleFilterByChange(event) {
    setFilterBy(event.target.value);
  }
  function handleSearchValChange(event) {
    setSearchVal(event.target.value);
  }

  return (
    <DefaultLayout
      title="Engagements"
      slug="engagements"
      controls={
        <>
          <Select
            label="Sort by"
            options={sortOptions}
            selection={sortBy}
            onChange={handleSortByChange}
            inline
          />
          <Select
            label="View"
            options={filterOptions}
            selection={filterBy}
            onChange={handleFilterByChange}
            inline
          />
          <FilterSearch
            label="Search engagements..."
            onChange={handleSearchValChange}
          />
        </>
      }
    >
      <EngagementsList
        data={engagements}
        sortKey={sortBy}
        filterKey={filterBy}
        searchVal={searchVal}
      />
    </DefaultLayout>
  );
}
