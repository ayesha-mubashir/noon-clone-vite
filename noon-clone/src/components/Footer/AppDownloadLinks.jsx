import { appStores } from "../../utils/SocialLinks";

const AppDownloadLinks = () => {
  return (
    <div className="absolute left-40 flex justify-center gap-6 ml-6 mt-6">
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
