import { useSelector, useDispatch } from "react-redux";
import {
  setMinPrice,
  setMaxPrice,
  clearExpress,
  clearPrice,
  updateFilter,
  setExpress,
  setFilters,
  setSelectedFilterKeys,
  clearRating,
  clearCategory,
  clearBrand,
  clearDeals,
} from "../../redux/actions/FilterActions";
import { brands, categories, deals } from "../../utils/FashionData";
import CheckBox from "../common/ui/CheckBoxButton";
import RadioButton from "../common/ui/RadioButton";
import PriceRange from "../common/ui/PriceRange";
import RatingSlider from "../common/ui/RatingSlider";

const FiltersSidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filters);
  const minPrice = useSelector((state) => state.filters.minPrice);
  const maxPrice = useSelector((state) => state.filters.maxPrice);

  const handleClearAll = () => {
    dispatch(
      setFilters({
        brand: [],
        category: [],
        express: null,
        priceRange: { min: 0, max: Infinity },
        deals: [],
        rating: 0,
      })
    );
    dispatch(setSelectedFilterKeys([]));
  };

  return (
    <div className="w-1/6 p-4">
      <button
        onClick={handleClearAll}
        className="hover:underline px-4 py-2 rounded mb-4"
      >
        Clear All Filters
      </button>

      {/* Delivery Mode */}
      <h3 className="font-bold mb-2">Delivery Mode</h3>
      <RadioButton
        name="express-sidebar"
        options={[
          { value: "true", label: "Express" },
          { value: "false", label: "Other" },
          { value: "null", label: "All" },
        ]}
        selectedValue={
          filters.express === null ? "null" : filters.express.toString()
        }
        onChange={(e) => dispatch(setExpress(e.target.value))}
      />

      <button
        onClick={() => dispatch(clearExpress())}
        className="text-sm underline text-gray-600"
      >
        Clear
      </button>

      {/* Category */}
      <h3 className="font-bold mt-4">Category</h3>
      <CheckBox
        name="category"
        options={categories}
        selectedValues={filters.category}
        onChange={(value) => dispatch(updateFilter("category", value))}
      />
      <button
        onClick={() => dispatch(clearCategory())}
        className="text-sm underline text-gray-600"
      >
        Clear
      </button>

      {/* Brand */}
      <h3 className="font-bold mt-4">Brand</h3>
      <CheckBox
        name="brand"
        options={brands}
        selectedValues={filters.brand}
        onChange={(value) => dispatch(updateFilter("brand", value))}
      />
      <button
        onClick={() => dispatch(clearBrand())}
        className="text-sm underline text-gray-600"
      >
        Clear
      </button>

      {/* Deals */}
      <h3 className="font-bold mt-4">Deals</h3>
      <CheckBox
        name="deals"
        options={deals}
        selectedValues={filters.deals}
        onChange={(value) => dispatch(updateFilter("deals", value))}
      />
      <button
        onClick={() => dispatch(clearDeals())}
        className="text-sm underline text-gray-600"
      >
        Clear
      </button>

      {/* Price */}
      <PriceRange
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinPriceChange={(e) => dispatch(setMinPrice(e.target.value))}
        onMaxPriceChange={(e) => dispatch(setMaxPrice(e.target.value))}
        onSubmit={() =>
          dispatch(
            setFilters({
              ...filters,
              priceRange: {
                min: minPrice === "" ? 0 : parseFloat(minPrice),
                max: maxPrice === "" ? Infinity : parseFloat(maxPrice),
              },
            })
          )
        }
      />
      <button
        onClick={() => dispatch(clearPrice())}
        className="text-sm underline text-gray-600"
      >
        Clear
      </button>

      {/* Rating */}
      <RatingSlider
        rating={filters.rating}
        onChange={(e) =>
          dispatch(
            setFilters({ ...filters, rating: parseFloat(e.target.value) })
          )
        }
      />
      <button
        onClick={() => dispatch(clearRating())}
        className="text-sm underline text-gray-600"
      >
        Clear
      </button>
    </div>
  );
};

export default FiltersSidebar;
