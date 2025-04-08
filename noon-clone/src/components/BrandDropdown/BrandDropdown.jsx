import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { brands as allBrands} from "../../utils/FashionConst";



const BrandDropdown = () => {
  const { filters, setFilters, setActiveDropdown } = useContext(ProductContext);
  const [search, setSearch] = useState("");

  const handleToggle = (brand) => {
    const updated = filters.brand.includes(brand)
      ? filters.brand.filter(b => b !== brand)
      : [...filters.brand, brand];

    setFilters(prev => ({ ...prev, brand: updated }));
  };

  const handleClear = () => {
    setFilters(prev => ({ ...prev, brand: [] }));
  };

  const filtered = allBrands.filter(b =>
    b.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg p-4 rounded-lg w-[320px] z-50">
      <input
        type="text"
        className="w-full border p-2 text-sm rounded mb-3"
        placeholder="Search brands..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="max-h-[200px] overflow-y-auto space-y-2">
        {filtered.map((brand, i) => (
          <label key={i} className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={filters.brand.includes(brand)}
              onChange={() => handleToggle(brand)}
            />
            {brand}
          </label>
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button onClick={handleClear} className="text-sm underline text-gray-600">Clear</button>
    
      </div>
    </div>
  );
};

export default BrandDropdown;
