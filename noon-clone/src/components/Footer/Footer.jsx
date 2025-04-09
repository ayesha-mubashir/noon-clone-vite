import FooterLinks from "./FooterLinks";
import { footerData } from "../../utils/FashionData";
import SupportSection from "./SupportSection";
import AppDownloadLinks from "./AppDownloadLinks";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-4">
        <SupportSection />

        <div className="flex flex-wrap justify-between mt-6">
          {footerData.map((section, index) => (
            <FooterLinks
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        <AppDownloadLinks />
        <SocialMediaLinks />

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
