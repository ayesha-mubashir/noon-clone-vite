import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { categories as allcategory} from "../../utils/FashionConst";



const categoryDropdown = () => {
  const { filters, setFilters, setActiveDropdown } = useContext(ProductContext);
  const [search, setSearch] = useState("");

  const handleToggle = (category) => {
    const updated = filters.category.includes(category)
      ? filters.category.filter(b => b !== category)
      : [...filters.category, category];

    setFilters(prev => ({ ...prev, category: updated }));
  };

  const handleClear = () => {
    setFilters(prev => ({ ...prev, category: [] }));
  };

  const filtered = allcategory.filter(b =>
    b.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg p-4 rounded-lg w-[320px] z-50">
      <input
        type="text"
        className="w-full border p-2 text-sm rounded mb-3"
        placeholder="Search categorys..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="max-h-[200px] overflow-y-auto space-y-2">
        {filtered.map((category, i) => (
          <label key={i} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={filters.category.includes(category)}
              onChange={() => handleToggle(category)}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button onClick={handleClear} className="text-sm underline text-gray-600">Clear</button>
        
      </div>
    </div>
  );
};

export default categoryDropdown;
