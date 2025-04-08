const FooterLinks = ({ title, links }) => {
  return (
    <div>
      <p className="font-semibold text-gray-800">{title}</p>
      <ul className="text-gray-800 text-sm">
        {links.map((link, index) => (
          <li key={index} className="cursor-pointer hover:text-gray-600">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
