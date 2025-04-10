import { clearCategory } from "../../redux/actions/FilterActions";
import { categories as allCategories } from "../../utils/FashionData";
import Dropdown from "../Dropdown/Dropdown";
import { useDispatch } from "react-redux";

const CategoryDropdown = () => {
  const dispatch = useDispatch();
  return (
    <Dropdown
      label="Categories"
      items={allCategories}
      filterKey="category"
      onClear={() => dispatch(clearCategory())}
      placeholder="Search categories..."
    />
  );
};

export default CategoryDropdown;
