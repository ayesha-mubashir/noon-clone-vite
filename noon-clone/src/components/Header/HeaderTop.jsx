import "./HeaderTop.css";
import { FaUser } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

const HeaderTop = () => {
  return (
    <div className="header-top w-full">
      <div className="max-w-[1440px] mx-auto flex flex-wrap md:flex-nowrap items-center justify-between px-4 py-2 gap-4">
        <div className="flex items-center justify-between w-full md:w-auto space-x-4">
          <img src="/logo.png" alt="Logo" className="h-16 sm:h-20" />

          <div className="hidden sm:flex items-center space-x-1">
            <img src="/dbx.png" alt="Flag" className="h-4 w-6" />
            <span className="text-sm font-bold text-black">Deliver to</span>
            <select className="bg-transparent text-black text-sm font-medium outline-none cursor-pointer">
              <option>Dubai</option>
            </select>
          </div>
        </div>

        <div className="w-full md:flex-1 px-0 md:px-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm"
          />
        </div>

        <div className="w-full md:w-auto flex items-center justify-end space-x-4 text-sm text-black font-medium">
          <span className="hidden sm:block cursor-pointer">العربية</span>

          <div className="flex items-center space-x-1 border-l pl-4 border-gray-400 cursor-pointer">
            <span className="hidden sm:block">Log in</span>
            <FaUser size={16} />
          </div>

          <div className="border-l pl-4 border-gray-400 cursor-pointer">
            <IoIosHeartEmpty size={20} />
          </div>

          <div className="border-l pl-4 border-gray-400 cursor-pointer">
            <AiOutlineShoppingCart size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
