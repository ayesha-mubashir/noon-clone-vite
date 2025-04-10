import { useDispatch, useSelector } from "react-redux";
import {
  setMinPrice,
  setMaxPrice,
  clearPrice,
} from "../../redux/actions/FilterActions";

const PriceDropdown = () => {
  const dispatch = useDispatch();
  const minPrice = useSelector((state) => state.filters.minPrice);
  const maxPrice = useSelector((state) => state.filters.maxPrice);

  return (
    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg p-4 rounded-lg w-[320px] z-50">
      <label className="text-sm font-medium mb-1 block">Min Price</label>
      <input
        type="number"
        value={minPrice}
        onChange={(e) => dispatch(setMinPrice(e.target.value))}
        className="w-full p-2 border mb-3 rounded text-sm"
      />

      <label className="text-sm font-medium mb-1 block">Max Price</label>
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => dispatch(setMaxPrice(e.target.value))}
        className="w-full p-2 border rounded text-sm"
      />

      <div className="flex justify-between mt-4">
        <button
          onClick={() => dispatch(clearPrice())}
          className="text-sm underline text-gray-600"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default PriceDropdown;
