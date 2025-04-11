import { appStores } from "../../utils/SocialLinks";

const AppDownloadLinks = () => {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      {appStores.map((store) => (
        <a
          key={store.name}
          href={store.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={store.imgSrc}
            alt={store.alt}
            className="h-10 hover:opacity-80 transition-opacity duration-300"
          />
        </a>
      ))}
    </div>
  );
};

export default AppDownloadLinks;
