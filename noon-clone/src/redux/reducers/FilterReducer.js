import {
  SET_FILTERS,
  SET_ACTIVE_DROPDOWN,
  SET_MIN_PRICE,
  SET_MAX_PRICE,
  SET_SELECTED_KEYS,
  TOGGLE_FILTER_ITEM,
  CLEAR_FILTER,
  CLEAR_PRICE,
  SET_EXPRESS,
  CLEAR_EXPRESS,
  CLEAR_RATING,
  UPDATE_FILTER,
  SET_RATING,
  CLEAR_CATEGORY,
  CLEAR_BRAND,
  CLEAR_DEALS,
} from "../types/FilterTypes";
import { beauty } from "../../utils/ProductsData";

import { setSelectedFilterKeys } from "../actions/FilterActions";

const initialState = {
  filters: {
    brand: [],
    category: [],
    express: null,
    priceRange: { min: 0, max: Infinity },
    deals: [],
    rating: 0,
    deliveryMode: null,
  },
  selectedFilterKeys: [],
  activeDropdown: null,
  minPrice: "",
  maxPrice: "",
  filteredProducts: beauty,
};

const getFilteredProducts = (filters) => {
  return beauty.filter((product) => {
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
};

export const setSelectedFilterKeysFromFilters = () => (dispatch, getState) => {
  const { filters, selectedFilterKeys } = getState().filters;
  let updatedKeys = [...selectedFilterKeys];

  const shouldInclude = {
    brand: filters.brand.length > 0,
    category: filters.category.length > 0,
    deals: filters.deals.length > 0,
    express: filters.express !== null,
    price: filters.priceRange.min !== 0 || filters.priceRange.max !== Infinity,
    rating: filters.rating > 0,
  };

  Object.entries(shouldInclude).forEach(([key, isSelected]) => {
    if (isSelected && !updatedKeys.includes(key)) {
      updatedKeys.push(key);
    }
  });

  updatedKeys = updatedKeys.filter((key) => shouldInclude[key]);

  dispatch(setSelectedFilterKeys(updatedKeys));
};

const FilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS: {
      const updatedFilters = action.payload;
      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: getFilteredProducts(updatedFilters),
      };
    }

    case UPDATE_FILTER: {
      debugger;
      const { key, value } = action.payload;
      const currentValues = state.filters[key] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      const updatedFilters = {
        ...state.filters,
        [key]: newValues,
      };

      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: getFilteredProducts(updatedFilters),
      };
    }

    case TOGGLE_FILTER_ITEM: {
      const { key, value } = action.payload;
      const currentValues = state.filters[key] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      const updatedFilters = {
        ...state.filters,
        [key]: newValues,
      };

      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: getFilteredProducts(updatedFilters),
      };
    }

    case CLEAR_FILTER: {
      const key = action.payload;
      const defaultValue = Array.isArray(state.filters[key]) ? [] : null;

      const updatedFilters = {
        ...state.filters,
        [key]: defaultValue,
      };

      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: getFilteredProducts(updatedFilters),
      };
    }

    case SET_ACTIVE_DROPDOWN:
      return { ...state, activeDropdown: action.payload };

    case SET_MIN_PRICE:
      return { ...state, minPrice: action.payload };

    case SET_MAX_PRICE:
      return { ...state, maxPrice: action.payload };

    case SET_SELECTED_KEYS:
      return { ...state, selectedFilterKeys: action.payload };

    case SET_EXPRESS: {
      const updatedFilters = {
        ...state.filters,
        express: action.payload === "null" ? null : action.payload === "true",
      };
      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: getFilteredProducts(updatedFilters),
      };
    }

    case CLEAR_EXPRESS: {
      const updatedFilters = {
        ...state.filters,
        express: null,
      };
      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: getFilteredProducts(updatedFilters),
      };
    }
    case CLEAR_PRICE: {
      const updatedFilters = {
        ...state.filters,
        priceRange: { min: 0, max: Infinity },
      };
      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: getFilteredProducts(updatedFilters),
      };
    }
    case CLEAR_RATING: {
      const updatedFilters = {
        ...state.filters,
        rating: 0,
      };
      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: getFilteredProducts(updatedFilters),
      };
    }
    case SET_RATING: {
      const updatedFilters = {
        ...state.filters,
        rating: action.payload,
      };
      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: getFilteredProducts(updatedFilters),
      };
    }

    case CLEAR_CATEGORY: {
      const updatedFilters = {
        ...state.filters,
        category: [],
      };
      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: getFilteredProducts(updatedFilters),
      };
    }

    case CLEAR_DEALS: {
      const updatedFilters = {
        ...state.filters,
        deals: [],
      };
      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: getFilteredProducts(updatedFilters),
      };
    }

    case CLEAR_BRAND: {
      const updatedFilters = {
        ...state.filters,
        brand: [],
      };
      return {
        ...state,
        filters: updatedFilters,
        filteredProducts: getFilteredProducts(updatedFilters),
      };
    }

    default:
      return state;
  }
};

export default FilterReducer;
