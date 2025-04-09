import { deals } from "../../utils/FashionData";
import Dropdown from "../Dropdown/Dropdown";

const DealsDropdown = () => {
  return (
    <Dropdown
      label="Deals"
      items={deals}
      filterKey="deals"
      placeholder="Search deals..."
    />
  );
};

export default DealsDropdown;
