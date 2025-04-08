"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { categories_carousel } from "../../utils/constants";
import { settings } from "../../utils/constants";

const Carousel = () => {
  return (
    <div className=" w-[80%] mx-auto mt-4 mb-4">
      <Slider {...settings}>
        {categories_carousel.map((category, index) => (
          <div key={index} className="min-w-[180px]">
            <img
              src={category.image}
              alt={category.name}
              className="w-40 h-40 object-contain mx-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
