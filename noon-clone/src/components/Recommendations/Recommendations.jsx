"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { recommendations_carousel } from "../../utils/constantsData";
import { settings } from "../../utils/constantsData";
import ProductCard from "../ProductCard/ProductCard";

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
