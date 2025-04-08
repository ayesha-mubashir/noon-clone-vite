import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import BrandDropdown from "../BrandDropdown/BrandDropdown";
import PriceDropdown from "../PriceDropdown/PriceDropdown";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import { FaChevronDown } from "react-icons/fa";

const ScrollFilterBar = () => {
  const { activeDropdown, setActiveDropdown } = useContext(ProductContext);

  const buttons = [
    { label: "Brand ", key: "brand" },
    { label: "Price (AED) ", key: "price" },
    { label: "Deals ", key: "deals" },
    { label: "Category ", key: "category" },

  ];

  return (
    <div className="relative z-10 bg-white border-b shadow-sm container mx-auto my-6 px-4 mt-60a">
  <div className="max-w-7xl mx-auto px-4 py-3">
    <div className="flex gap-4 flex-wrap justify-center">
      {buttons.map((btn, idx) => (
        <div key={idx} className="relative">
          <button
            className={`px-4 py-2 text-sm border rounded-full hover:cursor-pointer flex ${
              activeDropdown === btn.key ? "bg-blue-600 text-white" : "bg-gray-100"
            }`}
            onClick={() =>
              setActiveDropdown((prev) => (prev === btn.key ? null : btn.key))
            }
          >
            {btn.label}
            <FaChevronDown className="mt-1" size={12} />
          </button>

          {activeDropdown === btn.key &&  (
            <div className="absolute left-0 mt-2 z-50">
              {btn.key === "brand" && <BrandDropdown />}
              {btn.key === "price" && <PriceDropdown />}
              {btn.key === "deals" && <div className="bg-white p-4 rounded shadow">Deals Dropdown</div>}
              {btn.key === "category" && <CategoryDropdown />}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default ScrollFilterBar;
