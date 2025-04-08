import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const Discount = ({ heading, btnText, products, settings, navigateTo }) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate(navigateTo);
  };
  return (
    <div className="container mx-auto my-6 px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{heading}</h2>
        <button
          onClick={handleViewAll}
          className="text-sm font-semibold border px-3 py-1 rounded"
        >
          {btnText}
        </button>
      </div>

      {products && products.length > 0 ? (
        <Slider {...settings}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Slider>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default Discount;
