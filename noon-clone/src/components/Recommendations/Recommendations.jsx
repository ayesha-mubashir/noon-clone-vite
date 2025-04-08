"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { recommendations_carousel } from "../../utils/constants"; 
import { settings } from "../../utils/constants";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-[240px] relative">

      {product.bestSeller && (
        <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs py-1 px-2 rounded-full">Best Seller</span>
      )}

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[200px] object-contain rounded-lg"
      />

      <div className="mt-3">

        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-500 ml-1">{product.rating}</span>
        </div>

        <h3 className="text-lg font-semibold mt-1">{product.name}</h3>

        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
          <span className="text-xl font-bold">{product.discountedPrice}</span>
        </div>

        <div className="bg-blue-500 text-white text-xs py-1 px-2 rounded mt-2">
          {product.timeLeft}
        </div>

    
        {product.stockInfo && (
          <div className="text-sm text-gray-500 mt-2">{product.stockInfo}</div>
        )}
      </div>

     
    </div>
  );
};

const Recommendations = () => {


  return (
    <div className="container mx-auto my-6 px-4">
      <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
      <div className="max-w-7xl mx-auto"> 
        <Slider {...settings}>
          {recommendations_carousel.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Recommendations;
