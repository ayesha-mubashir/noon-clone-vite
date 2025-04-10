import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveDropdown } from "../../redux/actions/FilterActions";
import BrandDropdown from "../BrandDropdown/BrandDropdown";
import PriceDropdown from "../PriceDropdown/PriceDropdown";
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";
import ExpressDropdown from "../ExpressDropdown/ExpressDropdown";
import DealsDropdown from "../DealsDropdown/DealsDropdown";
import { FaChevronDown } from "react-icons/fa";

import { setSelectedFilterKeysFromFilters } from "../../redux/reducers/FilterReducer";
import RatingDropdown from "../RatingDropdown/RatingDropdown";

const ScrollFilterBar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filters);
  const activeDropdown = useSelector((state) => state.filters.activeDropdown);
  const selectedFilterKeys = useSelector(
    (state) => state.filters.selectedFilterKeys
  );

  console.log("ScrollFilterBar filters:", filters);
  console.log("activeDropdown:", activeDropdown);
  console.log("selectedFilterKeys:", selectedFilterKeys);

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
    {
      label: "Express",
      key: "express",
      isSelected: filters.express !== null,
    },
    {
      label: "Ratings",
      key: "rating",
      isSelected: filters.rating > 0,
    },
  ];

  const dropdownRefs = useRef({});
  const buttonRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      let clickedInsideAny = false;

      Object.keys(dropdownRefs.current).forEach((key) => {
        const dropdown = dropdownRefs.current[key];
        const button = buttonRefs.current[key];

        if (dropdown && dropdown.contains(event.target)) {
          clickedInsideAny = true;
        }

        if (button && button.contains(event.target)) {
          clickedInsideAny = true;
        }
      });

      if (!clickedInsideAny) {
        dispatch(setActiveDropdown(null));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(setSelectedFilterKeysFromFilters());
  }, [filters]);

  const handleButtonClick = (key) => {
    if (activeDropdown === key) {
      dispatch(setActiveDropdown(null));
    } else {
      dispatch(setActiveDropdown(key));
    }
  };

  return (
    <div className="relative z-10 container mx-auto my-6 px-4 mt-60a">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex gap-4 flex-wrap justify-center">
          {selectedFilterKeys.map((key, idx) => {
            const btn = buttons.find((b) => b.key === key);
            if (!btn || !btn.isSelected) return null;

            return (
              <div key={idx} className="relative">
                <button
                  ref={(el) => (buttonRefs.current[btn.key] = el)}
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
                  <div
                    ref={(el) => (dropdownRefs.current[btn.key] = el)}
                    className="absolute left-0 mt-2 z-50"
                  >
                    {btn.key === "brand" && <BrandDropdown />}
                    {btn.key === "price" && <PriceDropdown />}
                    {btn.key === "deals" && <DealsDropdown />}
                    {btn.key === "express" && <ExpressDropdown />}
                    {btn.key === "rating" && <RatingDropdown />}
                    {btn.key === "category" && <CategoryDropdown />}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ScrollFilterBar;
