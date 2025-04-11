import { FaQuestionCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SupportSection = () => {
  const handleNavigate = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="bg-gray-100 py-8 rounded-md px-4 flex">
      <div className="text-center mb-6">
        <p className="text-lg font-semibold">We're Always Here To Help</p>
        <p className="text-gray-500 mt-2">
          Reach out to us through any of these support channels
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
        <div
          className="flex items-center cursor-pointer hover:text-gray-600 transition duration-300"
          onClick={() => handleNavigate("https://help.noon.com")}
        >
          <FaQuestionCircle className="mr-2 text-xl text-gray-950" />
          <p className="text-gray-950 text-sm">Help Center</p>
        </div>

        <div
          className="flex items-center cursor-pointer hover:text-gray-600 transition duration-300"
          onClick={() => handleNavigate("mailto:care@noon.com")}
        >
          <MdEmail className="mr-2 text-xl text-gray-950" />
          <p className="text-gray-950 text-sm">care@noon.com</p>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
