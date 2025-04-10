import {
  SET_FILTERS,
  UPDATE_FILTER,
  CLEAR_FILTER,
  SET_ACTIVE_DROPDOWN,
  SET_MIN_PRICE,
  SET_MAX_PRICE,
  CLEAR_PRICE,
  SET_SELECTED_KEYS,
  SET_EXPRESS,
  CLEAR_EXPRESS,
  CLEAR_RATING,
  SET_RATING,
  CLEAR_CATEGORY,
  CLEAR_BRAND,
  CLEAR_DEALS,
  TOGGLE_FILTER_ITEM,
} from "../types/FilterTypes";

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters,
});

export const setActiveDropdown = (dropdown) => ({
  type: SET_ACTIVE_DROPDOWN,
  payload: dropdown,
});

export const setMinPrice = (price) => ({
  type: SET_MIN_PRICE,
  payload: price,
});

export const setMaxPrice = (price) => ({
  type: SET_MAX_PRICE,
  payload: price,
});

export const setSelectedFilterKeys = (keys) => ({
  type: SET_SELECTED_KEYS,
  payload: keys,
});

export const updateFilter = (key, value) => ({
  type: UPDATE_FILTER,
  payload: { key, value },
});

export const clearFilter = (key) => ({
  type: CLEAR_FILTER,
  payload: { key },
});

export const setExpress = (value) => ({
  type: SET_EXPRESS,
  payload: value,
});

export const clearExpress = () => ({
  type: CLEAR_EXPRESS,
});
export const clearRating = () => ({
  type: CLEAR_RATING,
});

export const clearPrice = () => ({
  type: CLEAR_PRICE,
});

export const setRating = (rating) => ({
  type: SET_RATING,
  payload: rating,
});

export const clearCategory = () => ({
  type: CLEAR_CATEGORY,
});
export const clearBrand = () => ({
  type: CLEAR_BRAND,
});
export const clearDeals = () => ({
  type: CLEAR_DEALS,
});

export const toggleFilterItem = (key, value) => ({
  type: TOGGLE_FILTER_ITEM,
  payload: { key, value },
});
