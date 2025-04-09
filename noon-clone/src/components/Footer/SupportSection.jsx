import { FaQuestionCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SupportSection = ({ helpCenterUrl, email }) => (
  <div className=" bg-gray-100 py-6 container mx-auto px-4">
    <div className="text-center mb-4">
      <p className="text-lg font-semibold ml-0 absolute">
        We're Always Here To Help
      </p>
      <p className="text-gray-500 ml-0 absolute mt-7">
        Reach out to us through any of these support channels
      </p>
    </div>

    <div className="flex justify-center gap-12 ">
      <div
        className="flex items-center cursor-pointer hover:text-gray-600 transition duration-300 "
        onClick={() => handleNavigate("https://help.noon.com")}
      >
        <FaQuestionCircle className="mr-2 text-xl text-gray-950" />
        <p className="text-gray-950 text-sm hover:text-gray-600">Help Center</p>
      </div>

      <div
        className="flex items-center cursor-pointer hover:text-gray-600 transition duration-300"
        onClick={() => handleNavigate("mailto:care@noon.com")}
      >
        <MdEmail className="mr-2 text-xl text-gray-950" />
        <p className="text-gray-950 text-sm hover:text-gray-600">
          care@noon.com
        </p>
      </div>
    </div>
  </div>
);

export default SupportSection;
