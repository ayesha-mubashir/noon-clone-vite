import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter, clearFilter } from "../../redux/actions/FilterActions";

const Dropdown = ({ label, items, filterKey, placeholder, onClear }) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filters);
  const [search, setSearch] = useState("");

  const getLabel = (item) => (typeof item === "string" ? item : item.label);

  const handleToggle = (label) => {
    const current = filters[filterKey] || [];
    const updated = current.includes(label)
      ? current.filter((b) => b !== label)
      : [...current, label];

    dispatch(updateFilter(filterKey, updated));
  };

  const handleClear = () => {
    if (onClear) {
      onClear();
    } else {
      dispatch(clearFilter(filterKey));
    }
  };

  const filteredItems = items.filter((item) =>
    getLabel(item).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg p-4 rounded-lg w-[320px] z-50">
      <input
        type="text"
        className="w-full border p-2 text-sm rounded mb-3"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="max-h-[200px] overflow-y-auto space-y-2">
        {filteredItems.map((item, i) => {
          const labelValue = getLabel(item);
          return (
            <label key={i} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={filters[filterKey]?.includes(labelValue)}
                onChange={() => handleToggle(labelValue)}
              />
              {labelValue}
            </label>
          );
        })}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={handleClear}
          className="text-sm underline text-gray-600"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
