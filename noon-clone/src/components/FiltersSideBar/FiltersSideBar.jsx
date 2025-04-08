import React, { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { brands, categories, deals } from "../../utils/FashionConst";


const FiltersSidebar = () => {
  const { filters, setFilters, setSidebarSelected} = useContext(ProductContext);
  console.log("Filters:", filters);

  const toggleFilter = (type, value) => {
    setSidebarSelected(type); 
    setFilters(prev => {
      const isActive = prev[type].includes(value);
      const updated = isActive ? prev[type].filter(v => v !== value) : [...prev[type], value];
      return { ...prev, [type]: updated };
    });
  };

  const setExpress = (val) => {
    setFilters(prev => ({ ...prev, express: val }));
  };

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handlePriceSubmit = () => {
    setFilters(prev => ({
      ...prev,
      priceRange: {
        min: minPrice === "" ? 0 : parseFloat(minPrice),
        max: maxPrice === "" ? Infinity : parseFloat(maxPrice)
      }
    }));
  };

  return (
    <div className="w-1/4 p-4">
      <h3 className="font-bold mb-2">Delivery Mode</h3>
      <label>
        <input
          type="radio"
          name="express"
          checked={filters.express === true}
          onChange={() => setExpress(true)}
        /> Express
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="express"
          checked={filters.express === false}
          onChange={() => setExpress(false)}
        /> Other
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="express"
          checked={filters.express === null}
          onChange={() => setExpress(null)}
        /> All
      </label>

      <h3 className="font-bold mt-4">Category</h3>
      {categories.map((cat, idx) => (
        <div key={idx}>
          <input
            type="checkbox"
            checked={filters.category.includes(cat)}
            onChange={() => toggleFilter("category", cat)}
          />
          <label className="ml-2">{cat}</label>
        </div>
      ))}

      <h3 className="font-bold mt-4">Brand</h3>
      {brands.map((brand, idx) => (
        <div key={idx}>
          <input
            type="checkbox"
            checked={filters.brand.includes(brand)}
            onChange={() => toggleFilter("brand", brand)}
          />
          <label className="ml-2">{brand}</label>
        </div>
      ))}

      <h3 className="font-bold mt-4">Deals</h3>
            {deals.map((deals, idx) => (
              <div key={idx}>
                <input
                  type="checkbox"
                  checked={filters.deals.includes(deals)}
                  onChange={() => toggleFilter("deals", deals)}
                />
                <label className="ml-2">{deals}</label>
              </div>
            ))}

      <div className="mt-6 flex">
        <h3 className="font-bold mb-2">Price</h3>
        <div className="flex gap-2 mb-2">
          <input
            type="number"
            placeholder="Min"
            className="border p-1 w-[80px] text-sm"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <span className="mt-1">to</span>
          <input
            type="number"
            placeholder="Max"
            className="border p-1 w-[80px] text-sm"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-600 text-white px-3 py-1 h-8 ml-2 rounded text-sm hover:bg-blue-400"
          onClick={handlePriceSubmit}
        >
          Go
        </button>
      </div>





      <div className="mt-4">
        <h3 className="font-bold mb-1">Product Rating</h3>
        <div className="flex items-center gap-2 w-full max-w-[300px]">
          <input
            type="range"
            min={0}
            max={5}
            step={0.1}
            value={filters.rating}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                rating: parseFloat(e.target.value),
              }))
            }
            className="flex-1 h-[6px]"
          />
          <span className="text-xs w-[32px] text-right">
            {filters.rating.toFixed(1)}★
          </span>
        </div>
      </div>



    </div>
  );
};

export default FiltersSidebar;



