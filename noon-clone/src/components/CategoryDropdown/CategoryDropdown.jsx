import { categories as allCategories } from "../../utils/FashionData";
import Dropdown from "../Dropdown/Dropdown";

const CategoryDropdown = () => {
  return (
    <Dropdown
      label="Categories"
      items={allCategories}
      filterKey="category"
      placeholder="Search categories..."
    />
  );
};

export default CategoryDropdown;
