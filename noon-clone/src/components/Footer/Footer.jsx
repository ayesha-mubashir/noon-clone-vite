import React from "react";
import { FaQuestionCircle } from 'react-icons/fa'; 
import { MdEmail } from 'react-icons/md'; 


const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-4">
        {/* Support Section */}
        <div className=" bg-gray-100 py-6 container mx-auto px-4">
        
            <div className="text-center mb-4">
            <p className="text-lg font-semibold ml-0 absolute">We're Always Here To Help</p>
            <p className="text-gray-500 ml-0 absolute mt-7">Reach out to us through any of these support channels</p>
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
            <p className="text-gray-950 text-sm hover:text-gray-600">care@noon.com</p>
          </div>
        </div>
        
        </div>




        {/* Footer Links Section */}
        <div className="flex flex-wrap justify-between mt-6">
          {/* Electronics */}
          <div>
            <p className="font-semibold text-gray-800">Electronics</p>
            <ul className="text-gray-800 text-sm">
              <li className="cursor-pointer hover:text-gray-600">Mobiles</li>
              <li className="cursor-pointer hover:text-gray-600">Tablets</li>
              <li className="cursor-pointer hover:text-gray-600">Laptops</li>
              <li className="cursor-pointer hover:text-gray-600">Home Appliances</li>
              <li className="cursor-pointer hover:text-gray-600">Headphones</li>
            </ul>
          </div>

          {/* Fashion */}
          <div>
            <p className="font-semibold text-gray-800">Fashion</p>
            <ul className="text-gray-800 text-sm">
              <li className="cursor-pointer hover:text-gray-600">Women's Fashion</li>
              <li className="cursor-pointer hover:text-gray-600">Men's Fashion</li>
              <li className="cursor-pointer hover:text-gray-600">Girls' Fashion</li>
              <li className="cursor-pointer hover:text-gray-600">Boys' Fashion</li>
              <li className="cursor-pointer hover:text-gray-600">Watches</li>
            </ul>
          </div>

          {/* Beauty */}
          <div>
            <p className="font-semibold text-gray-800">Beauty</p>
            <ul className="text-gray-800 text-sm">
              <li className="cursor-pointer hover:text-gray-600">Fragrance</li>
              <li className="cursor-pointer hover:text-gray-600">Make-Up</li>
              <li className="cursor-pointer hover:text-gray-600">Haircare</li>
              <li className="cursor-pointer hover:text-gray-600">Skincare</li>
            </ul>
          </div>

          {/* Baby & Toys */}
          <div>
            <p className="font-semibold text-gray-800">Baby & Toys</p>
            <ul className="text-gray-800 text-sm">
              <li className="cursor-pointer hover:text-gray-600">Diapering</li>
              <li className="cursor-pointer hover:text-gray-600">Baby Transport</li>
              <li className="cursor-pointer hover:text-gray-600">Nursing & Feeding</li>
              <li className="cursor-pointer hover:text-gray-600">Baby Toys</li>
            </ul>
          </div>

          {/* Top Brands */}
          <div>
            <p className="font-semibold text-gray-800">Top Brands</p>
            <ul className="text-gray-800 text-sm">
              <li className="cursor-pointer hover:text-gray-600">Pampers</li>
              <li className="cursor-pointer hover:text-gray-600">Apple</li>
              <li className="cursor-pointer hover:text-gray-600">Nike</li>
              <li className="cursor-pointer hover:text-gray-600">Samsung</li>
            </ul>
          </div>
        </div>



    <div className="relative py-6 bg-gray-100">
  
    <div className="absolute left-0 flex justify-center gap-6 ml-6 mt-6">
        <a href="https://www.apple.com/app-store/" target="_blank">
        <img
            src="/appstore.svg" 
            alt="App Store"
            className="h-10 hover:opacity-80 transition-opacity duration-300"
        />
        </a>
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
        <img
            src="/google-play.svg" 
            alt="Google Play"
            className="h-10 hover:opacity-80 transition-opacity duration-300"
        />
        </a>
        <a href="https://appgallery.huawei.com/" target="_blank" rel="noopener noreferrer">
        <img
            src="/appgallery.png"  
            alt="AppGallery"
            className="h-10 hover:opacity-80 transition-opacity duration-300"
        />
        </a>
    </div>

    <div className="absolute right-0 flex justify-center gap-6 mb-6 mr-6 mt-6">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img
            src="/fb-noon.svg" 
            alt="Facebook"
            className="h-10 w-10 rounded-full"
        />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img
            src="/twitter-noon.svg" 
            alt="Twitter"
            className="h-10 w-10 rounded-full"
        />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img
            src="/insta-noon.svg" 
            alt="Instagram"
            className="h-10 w-10 rounded-full"
        />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img
            src="/linkedin-noon.svg" 
            alt="LinkedIn"
            className="h-10 w-10 rounded-full "
        />
        </a>
    </div>
    </div>


        <div className="mt-20 text-center text-gray-500">
          <p>© 2025 noon. All Rights Reserved</p>
          <p className="text-sm mt-2">
            <a href="/terms-of-use" className="text-gray-500 hover:underline">Terms of Use</a> | 
            <a href="/privacy-policy" className="text-gray-500 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
