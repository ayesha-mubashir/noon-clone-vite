import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FooterLinks from "./FooterLinks";
import { footerData } from "../../utils/FashionData";

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-4">
        {/* Support Section */}
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
              <p className="text-gray-950 text-sm hover:text-gray-600">
                Help Center
              </p>
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

        {/* Footer Links Section */}
        <div className="flex flex-wrap justify-between mt-6">
          {footerData.map((section, index) => (
            <FooterLinks
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
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
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/google-play.svg"
                alt="Google Play"
                className="h-10 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
            <a
              href="https://appgallery.huawei.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/appgallery.png"
                alt="AppGallery"
                className="h-10 hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </div>

          <div className="absolute right-0 flex justify-center gap-6 mb-6 mr-6 mt-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/fb-noon.svg"
                alt="Facebook"
                className="h-10 w-10 rounded-full"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/twitter-noon.svg"
                alt="Twitter"
                className="h-10 w-10 rounded-full"
              />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/insta-noon.svg"
                alt="Instagram"
                className="h-10 w-10 rounded-full"
              />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            <a href="/terms-of-use" className="text-gray-500 hover:underline">
              Terms of Use
            </a>{" "}
            |
            <a href="/privacy-policy" className="text-gray-500 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
