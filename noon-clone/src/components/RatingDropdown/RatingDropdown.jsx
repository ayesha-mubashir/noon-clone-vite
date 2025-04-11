import { useDispatch, useSelector } from "react-redux";
import { setRating, clearRating } from "../../redux/actions/FilterActions";
import RatingSlider from "../common/ui/RatingSlider";

const RatingDropdown = () => {
  const dispatch = useDispatch();
  // const rating = useSelector((state) => state.filters.rating);
  const rating = useSelector((state) => state.filters.filters.rating);

  const handleChange = (e) => {
    dispatch(setRating(parseFloat(e.target.value)));
  };

  const handleClear = () => {
    dispatch(clearRating());
  };

  return (
    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg p-4 rounded-lg w-[320px] z-50">
      <RatingSlider rating={rating} onChange={handleChange} />

      <div className="flex justify-between mt-4">
        <button
          onClick={handleClear}
          className="text-sm underline text-gray-600"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default RatingDropdown;
