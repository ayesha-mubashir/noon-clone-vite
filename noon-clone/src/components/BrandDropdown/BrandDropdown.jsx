import { clearBrand } from "../../redux/actions/FilterActions";
import { brands as allBrands } from "../../utils/FashionData";
import Dropdown from "../Dropdown/Dropdown";

const BrandDropdown = () => {
  return (
    <Dropdown
      label="Brands"
      items={allBrands}
      filterKey="brand"
      onClear={() => dispatch(clearBrand())}
      placeholder="Search brands..."
    />
  );
};

export default BrandDropdown;
