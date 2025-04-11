import { useDispatch, useSelector } from "react-redux";
import { setExpress, clearExpress } from "../../redux/actions/FilterActions";
import RadioButton from "../common/ui/RadioButton";

const ExpressDropdown = () => {
  const filters = useSelector((state) => state.filters.filters);

  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearExpress());
  };

  return (
    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg p-4 rounded-lg w-[250px] z-50">
      <RadioButton
        name="express-scrollbar"
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

export default ExpressDropdown;
