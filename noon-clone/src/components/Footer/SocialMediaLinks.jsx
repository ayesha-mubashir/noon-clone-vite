import { socialLinks } from "../../utils/SocialLinks";

const SocialMediaLinks = () => {
  return (
    <div className="flex justify-center md:justify-end gap-4">
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
