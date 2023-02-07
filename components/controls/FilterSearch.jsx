import SearchIcon from "/components/icons/SearchIcon";

const missingLabelText = "missing `label` in FilterSearch";

export default function FilterSearch(props) {
  const { name, label, onChange } = props;

  return (
    <label className="filter-search">
      <span className="u-visually-hidden">
        {label || missingLabelText}
      </span>

      <SearchIcon />

      <input
        className="filter-search-input u-font-md"
        id={name || "filter-search"}
        name={name || "filter-search"}
        placeholder={label || missingLabelText}
        type="text"
        onChange={onChange}
      />
    </label>
  );
}
