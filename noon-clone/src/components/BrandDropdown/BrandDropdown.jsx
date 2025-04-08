import { brands as allBrands } from "../../utils/FashionData";
import Dropdown from "../Dropdown/Dropdown";

const BrandDropdown = () => {
  return (
    <Dropdown
      label="Brands"
      items={allBrands}
      filterKey="brand"
      placeholder="Search brands..."
    />
  );
};

export default BrandDropdown;
