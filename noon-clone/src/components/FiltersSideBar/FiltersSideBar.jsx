import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { brands, categories, deals } from "../../utils/FashionData";
import Checkbox from "../CheckBox/CheckBox";
import Radio from "../Radio/Radio";
import PriceRange from "../PriceRange/PriceRange";
import Rating from "../Rating/Rating";

const FiltersSidebar = () => {
  const {
    filters,
    setFilters,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setActiveDropdown,
  } = useContext(ProductContext);

  //clear filter on a particular
  const handleClearBrand = () => {
    setFilters((prev) => ({
      ...prev,
      brand: [],
    }));
  };
  const handleClearCategory = () => {
    setFilters((prev) => ({
      ...prev,
      category: [],
    }));
  };
  const handleClearDeals = () => {
    setFilters((prev) => ({
      ...prev,
      deals: [],
    }));
  };
  const handleClearPrice = () => {
    setFilters((prev) => ({
      ...prev,
      priceRange: { min: 0, max: Infinity },
    }));
  };
  const handleClearRatings = () => {
    setFilters((prev) => ({
      ...prev,
      rating: 0,
    }));
  };

  const handleClearAll = () => {
    setFilters({
      brand: [],
      category: [],
      express: null,
      priceRange: { min: 0, max: Infinity },
      deals: [],
      rating: 0,
    });
  };

  const handleExpressChange = (e, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      express: value === "null" ? null : value === "true" ? true : false,
    }));
  };

  const handleCategoryChange = (category) => {
    const updated = filters.category.includes(category)
      ? filters.category.filter((cat) => cat !== category)
      : [...filters.category, category];

    setFilters((prev) => ({ ...prev, category: updated }));
    setActiveDropdown("category");
  };

  const handleBrandChange = (brand) => {
    const updated = filters.brand.includes(brand)
      ? filters.brand.filter((b) => b !== brand)
      : [...filters.brand, brand];

    setFilters((prev) => ({ ...prev, brand: updated }));
    setActiveDropdown("brand");
  };

  const handleDealChange = (deal) => {
    const updated = filters.deals.includes(deal)
      ? filters.deals.filter((d) => d !== deal)
      : [...filters.deals, deal];

    setFilters((prev) => ({ ...prev, deals: updated }));
    setActiveDropdown("deals");
  };

  const handlePriceSubmit = () => {
    setFilters((prev) => ({
      ...prev,
      priceRange: {
        min: minPrice === "" ? 0 : parseFloat(minPrice),
        max: maxPrice === "" ? Infinity : parseFloat(maxPrice),
      },
    }));
    setActiveDropdown("price");
  };

  const handleRatingChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      rating: parseFloat(e.target.value),
    }));
  };

  return (
    <div className="w-1/6 p-4">
      <button
        className="hover:underline px-4 py-2 rounded mb-4 "
        onClick={handleClearAll}
      >
        Clear All Filters
      </button>
      <h3 className="font-bold mb-2">Delivery Mode</h3>

      <Radio
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
        onClick={handleClearAll}
        className="text-sm underline text-gray-600"
      >
        Clear
      </button>

      <h3 className="font-bold mt-4">Category</h3>
      <Checkbox
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
      <Checkbox
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
      <Checkbox
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

      <Rating rating={filters.rating} onChange={handleRatingChange} />
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
