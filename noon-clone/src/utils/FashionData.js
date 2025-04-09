export const womenCategoryData = [
  { id: 1, image: "/women/hoodies.png" },
  { id: 2, image: "/women/sweater.png" },
  { id: 3, image: "/women/footwear.png" },
  { id: 4, image: "/women/bag.png" },
  { id: 5, image: "/women/jackets.png" },
  { id: 6, image: "/women/tops.png" },
];

export const menCategoryData = [
  { id: 1, image: "/women/mhoodie.png" },
  { id: 2, image: "/women/msweater.png" },
  { id: 3, image: "/women/mfootwear.png" },
  { id: 4, image: "/women/tshirts.png" },
  { id: 5, image: "/women/mjackets.png" },
  { id: 6, image: "/women/msportwear.png" },
];

export const brands = [
  "Lattafa",
  "Olaplex",
  "L'Oreal",
  "Dove",
  "Nivea",
  "Garnier",
  "Neutrogena",
  "Clinique",
  "Rasasi",
  "The Ordinary",
  "CeraVe",
];
export const categories = ["Fragrance", "Hair Care", "Makeup", "Skin Care"];
export const deals = ["Deal", "Mega Deal"];

export const footerData = [
  {
    title: "Electronics",
    links: ["Mobiles", "Tablets", "Laptops", "Home Appliances", "Headphones"],
  },
  {
    title: "Fashion",
    links: [
      "Women's Fashion",
      "Men's Fashion",
      "Girls' Fashion",
      "Boys' Fashion",
      "Watches",
    ],
  },
  {
    title: "Beauty",
    links: ["Fragrance", "Make-Up", "Haircare", "Skincare"],
  },
  {
    title: "Baby & Toys",
    links: ["Diapering", "Baby Transport", "Nursing & Feeding", "Baby Toys"],
  },
  {
    title: "Top Brands",
    links: ["Pampers", "Apple", "Nike", "Samsung"],
  },
];

export const fashion = [
  {
    heading: "Women's Fashion",
    items: womenCategoryData,
    navigateTo: "/view-all-womens-fashion",
    buttonText: "View All",
  },
  {
    heading: "Men's Fashion",
    items: menCategoryData,
    navigateTo: "/view-all-mens-fashion",
    buttonText: "View All",
  },
  {
    heading: "Beauty",
    items: womenCategoryData,
    navigateTo: "/view-all-beauty",
    buttonText: "View All",
  },
];
