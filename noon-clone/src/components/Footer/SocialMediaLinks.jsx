import { socialLinks } from "../../utils/SocialLinks";

const SocialMediaLinks = () => {
  return (
    <div className="absolute right-60 flex justify-center gap-6 mb-6 mr-6 mt-6">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={social.imgSrc}
            alt={social.alt}
            className="h-10 w-10 rounded-full"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
