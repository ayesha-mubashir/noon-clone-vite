import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import RadioButton from "../common/ui/RadioButton";
import useFilterHandlers from "../../hooks/useFilterHandlers";

const ExpressDropdown = () => {
  const { filters } = useContext(ProductContext);

  const { handleExpressChange, handleClearExpress } = useFilterHandlers();

  return (
    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg p-4 rounded-lg w-[250px] z-50">
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

      <div className="flex justify-between mt-4">
        <button
          onClick={handleClearExpress}
          className="text-sm underline text-gray-600"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ExpressDropdown;
