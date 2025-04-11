import FooterLinks from "./FooterLinks";
import { footerData } from "../../utils/FashionData";
import SupportSection from "./SupportSection";
import AppDownloadLinks from "./AppDownloadLinks";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <SupportSection />

        <div className="flex flex-wrap justify-between mt-6 gap-y-8">
          {footerData.map((section, index) => (
            <FooterLinks
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-10 gap-6">
          <AppDownloadLinks />
          <SocialMediaLinks />
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2025 noon. All Rights Reserved</p>
          <p className="mt-2">
            <a href="/terms-of-use" className="hover:underline">
              Terms of Use
            </a>{" "}
            |{" "}
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
