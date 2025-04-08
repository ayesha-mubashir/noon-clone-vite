import { useContext, useState, useEffect, useRef } from "react";
import { ProductContext } from "../../Context/ProductContext";
import BrandDropdown from "../BrandDropdown/BrandDropdown";
import PriceDropdown from "../PriceDropdown/PriceDropdown";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import { FaChevronDown } from "react-icons/fa";

const ScrollFilterBar = () => {
  const { filters, activeDropdown, setActiveDropdown } =
    useContext(ProductContext);

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const buttons = [
    { label: "Brand", key: "brand", isSelected: filters.brand.length > 0 },
    {
      label: "Price (AED)",
      key: "price",
      isSelected:
        filters.priceRange.min !== 0 || filters.priceRange.max !== Infinity,
    },
    { label: "Deals", key: "deals", isSelected: filters.deals.length > 0 },
    {
      label: "Category",
      key: "category",
      isSelected: filters.category.length > 0,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setActiveDropdown]);

  const handleButtonClick = (key) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };

  return (
    <div className="relative z-10 bg-white border-b shadow-sm container mx-auto my-6 px-4 mt-60a">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex gap-4 flex-wrap justify-center">
          {buttons
            .filter((btn) => btn.isSelected)
            .map((btn, idx) => (
              <div key={idx} className="relative">
                <button
                  ref={buttonRef}
                  className={`px-4 py-2 text-sm border rounded-full hover:cursor-pointer flex ${
                    activeDropdown === btn.key
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handleButtonClick(btn.key)}
                >
                  {btn.label}
                  <FaChevronDown className="mt-1" size={12} />
                </button>

                {activeDropdown === btn.key && (
                  <div ref={dropdownRef} className="absolute left-0 mt-2 z-50">
                    {btn.key === "brand" && <BrandDropdown />}
                    {btn.key === "price" && <PriceDropdown />}
                    {btn.key === "deals" && (
                      <div className="bg-white p-4 rounded shadow">
                        Deals Dropdown
                      </div>
                    )}
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
