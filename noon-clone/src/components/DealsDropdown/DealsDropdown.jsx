import { clearDeals } from "../../redux/actions/FilterActions";
import { deals } from "../../utils/FashionData";
import Dropdown from "../Dropdown/Dropdown";

const DealsDropdown = () => {
  return (
    <Dropdown
      label="Deals"
      items={deals}
      filterKey="deals"
      onClear={() => dispatch(clearDeals())}
      placeholder="Search deals..."
    />
  );
};

export default DealsDropdown;
