import { createContext, useState } from "react";
import { beauty } from "../utils/ProductsData";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    brand: [],
    category: [],
    express: null,
    priceRange: { min: 0, max: Infinity },
    deals: [],
    rating: 0,
    deliveryMode: null,
  });

  const [selectedFilterKeys, setSelectedFilterKeys] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const updateSelectionOrder = (key) => {
    setSelectedFilterKeys((prev) => {
      const filtered = prev.filter((item) => item !== key);
      return [...filtered, key];
    });
  };

  const filteredProducts = beauty.filter((product) => {
    const brandMatch =
      filters.brand.length === 0 || filters.brand.includes(product.brand);
    const categoryMatch =
      filters.category.length === 0 ||
      filters.category.includes(product.category);
    const expressMatch =
      filters.express === null || product.express === filters.express;
    const priceMatch =
      product.discountedPrice >= filters.priceRange.min &&
      product.discountedPrice <= filters.priceRange.max;
    const dealsMatch =
      filters.deals.length === 0 || filters.deals.includes(product.deals);
    const ratingMatch = product.rating >= filters.rating;

    return (
      brandMatch &&
      categoryMatch &&
      expressMatch &&
      priceMatch &&
      dealsMatch &&
      ratingMatch
    );
  });

  return (
    <ProductContext.Provider
      value={{
        filters,
        setFilters,
        filteredProducts,
        activeDropdown,
        setActiveDropdown,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        selectedFilterKeys,
        setSelectedFilterKeys,
        updateSelectionOrder,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
