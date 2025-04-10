"use client";
import { useState } from "react";
import "./HeaderMain.css";
import { categories } from "../../utils/constantsData";

const HeaderMain = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="header-main z-50">
      <nav className="category-nav">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-item"
            onMouseEnter={() => setHoveredCategory(category.name)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <span className="category-name">{category.name}</span>

            {hoveredCategory === category.name &&
              category.subcategories?.length > 0 && (
                <div className="dropdown-menu">
                  {category.subcategories.map((subcat, i) => (
                    <div key={i} className="subcategory">
                      <strong>{subcat.label}</strong>
                      <ul>
                        {subcat.items.map((item, j) => (
                          <li key={j}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default HeaderMain;
