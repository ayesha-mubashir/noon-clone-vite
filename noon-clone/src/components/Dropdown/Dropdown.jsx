import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";

const Dropdown = ({ label, items, filterKey, placeholder }) => {
  const { filters, setFilters } = useContext(ProductContext);
  const [search, setSearch] = useState("");

  const handleToggle = (item) => {
    const updated = filters[filterKey].includes(item)
      ? filters[filterKey].filter((b) => b !== item)
      : [...filters[filterKey], item];

    setFilters((prev) => ({ ...prev, [filterKey]: updated }));
  };

  const handleClear = () => {
    setFilters((prev) => ({ ...prev, [filterKey]: [] }));
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
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
        {filteredItems.map((item, i) => (
          <label key={i} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={filters[filterKey].includes(item)}
              onChange={() => handleToggle(item)}
            />
            {item}
          </label>
        ))}
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
