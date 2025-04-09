import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const useFilterHandlers = () => {
  const {
    filters,
    setFilters,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setActiveDropdown,
    updateSelectionOrder,
    setSelectedFilterKeys,
  } = useContext(ProductContext);

  const handleClearBrand = () => {
    setFilters((prev) => ({ ...prev, brand: [] }));
  };
  const handleClearExpress = () => {
    setFilters((prev) => ({ ...prev, express: null }));
    setActiveDropdown(null);
  };

  const handleClearCategory = () => {
    setFilters((prev) => ({ ...prev, category: [] }));
  };

  const handleClearDeals = () => {
    setFilters((prev) => ({ ...prev, deals: [] }));
  };

  const handleClearPrice = () => {
    setFilters((prev) => ({
      ...prev,
      priceRange: { min: 0, max: Infinity },
    }));
  };

  const handleClearRatings = () => {
    setFilters((prev) => ({ ...prev, rating: 0 }));
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
    setSelectedFilterKeys([]);
  };

  const handleExpressChange = (e, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      express: value === "null" ? null : value === "true" ? true : false,
    }));

    updateSelectionOrder("express");
  };

  const handleCategoryChange = (category) => {
    setFilters((prev) => {
      const updatedCategories = prev.category.includes(category)
        ? prev.category.filter((cat) => cat !== category)
        : [...prev.category, category];

      return {
        ...prev,
        category: updatedCategories,
      };
    });

    updateSelectionOrder("category");
  };

  const handleBrandChange = (brand) => {
    setFilters((prev) => {
      const updatedBrands = prev.brand.includes(brand)
        ? prev.brand.filter((b) => b !== brand)
        : [...prev.brand, brand];

      return {
        ...prev,
        brand: updatedBrands,
      };
    });

    updateSelectionOrder("brand");
  };

  const handleDealChange = (deal) => {
    setFilters((prev) => {
      const updatedDeals = prev.deals.includes(deal)
        ? prev.deals.filter((d) => d !== deal)
        : [...prev.deals, deal];

      return {
        ...prev,
        deals: updatedDeals,
      };
    });

    updateSelectionOrder("deals");
  };

  const handlePriceSubmit = () => {
    setFilters((prev) => ({
      ...prev,
      priceRange: {
        min: minPrice === "" ? 0 : parseFloat(minPrice),
        max: maxPrice === "" ? Infinity : parseFloat(maxPrice),
      },
    }));

    updateSelectionOrder("price");
  };

  const handleRatingChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      rating: parseFloat(e.target.value),
    }));

    updateSelectionOrder("rating");
  };

  return {
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
  };
};

export default useFilterHandlers;
