import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";

const PriceDropdown = () => {
  const { filters, setFilters, setActiveDropdown } = useContext(ProductContext);

  const [min, setMin] = useState(filters.priceRange.min || "");
  const [max, setMax] = useState(filters.priceRange.max !== Infinity ? filters.priceRange.max : "");

  const handleClear = () => {
    setMin("");
    setMax("");
    setFilters(prev => ({
      ...prev,
      priceRange: { min: 0, max: Infinity }
    }));
    setActiveDropdown(null);
  };

  return (
    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg p-4 rounded-lg w-[320px] z-50">
      <label className="text-sm font-medium mb-1 block">Min Price</label>
      <input
        type="number"
        value={min}
        onChange={e => setMin(e.target.value)}
        className="w-full p-2 border mb-3 rounded text-sm"
      />

      <label className="text-sm font-medium mb-1 block">Max Price</label>
      <input
        type="number"
        value={max}
        onChange={e => setMax(e.target.value)}
        className="w-full p-2 border rounded text-sm"
      />

      <div className="flex justify-between mt-4">
        <button onClick={handleClear} className="text-sm underline text-gray-600">Clear</button>

      </div>
    </div>
  );
};

export default PriceDropdown;
