import React from "react";
import useFilterHandlers from "../../hooks/useFilterHandlers";
import { brands, categories, deals } from "../../utils/FashionData";
import CheckBox from "../common/ui/CheckBoxButton";
import RadioButton from "../common/ui/RadioButton";
import PriceRange from "../common/ui/PriceRange";
import RatingSlider from "../common/ui/RatingSlider";

const FiltersSidebar = () => {
  const {
    filters,
    minPrice,
    maxPrice,
    setMinPrice,
    setMaxPrice,
    handleClearBrand,
    handleClearCategory,
    handleClearDeals,
    handleClearPrice,
    handleClearRatings,
    handleClearAll,
    handleExpressChange,
    handleCategoryChange,
    handleBrandChange,
    handleDealChange,
    handlePriceSubmit,
    handleRatingChange,
    handleClearExpress,
  } = useFilterHandlers();

  return (
    <div className="w-1/6 p-4">
      <button
        className="hover:underline px-4 py-2 rounded mb-4"
        onClick={handleClearAll}
      >
        Clear All Filters
      </button>

      <h3 className="font-bold mb-2">Delivery Mode</h3>
      <RadioButton
        name="express"
        options={[
          { value: "true", label: "Express" },
          { value: "false", label: "Other" },
          { value: "null", label: "All" },
        ]}
        selectedValue={
          filters.express === null ? "null" : filters.express.toString()
        }
        onChange={handleExpressChange}
      />
      <button
        onClick={handleClearExpress}
        className="text-sm underline text-gray-600"
      >
        Clear
      </button>

      <h3 className="font-bold mt-4">Category</h3>
      <CheckBox
        name="category"
        options={categories}
        selectedValues={filters.category}
        onChange={handleCategoryChange}
      />
      <button
        onClick={handleClearCategory}
        className="text-sm underline text-gray-600"
      >
        Clear
      </button>

      <h3 className="font-bold mt-4">Brand</h3>
      <CheckBox
        name="brand"
        options={brands}
        selectedValues={filters.brand}
        onChange={handleBrandChange}
      />
      <button
        onClick={handleClearBrand}
        className="text-sm underline text-gray-600"
      >
        Clear
      </button>

      <h3 className="font-bold mt-4">Deals</h3>
      <CheckBox
        name="deals"
        options={deals}
        selectedValues={filters.deals}
        onChange={handleDealChange}
      />
      <button
        onClick={handleClearDeals}
        className="text-sm underline text-gray-600"
      >
        Clear
      </button>

      <PriceRange
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinPriceChange={(e) => setMinPrice(e.target.value)}
        onMaxPriceChange={(e) => setMaxPrice(e.target.value)}
        onSubmit={handlePriceSubmit}
      />
      <button
        onClick={handleClearPrice}
        className="text-sm underline text-gray-600"
      >
        Clear
      </button>

      <RatingSlider rating={filters.rating} onChange={handleRatingChange} />
      <button
        onClick={handleClearRatings}
        className="text-sm underline text-gray-600"
      >
        Clear
      </button>
    </div>
  );
};

export default FiltersSidebar;
