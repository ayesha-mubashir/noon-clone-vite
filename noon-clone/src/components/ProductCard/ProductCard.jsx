import { AiOutlineHeart } from "react-icons/ai";
export const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg border shadow-sm p-3 h-[390px] w-[240px] relative">
      <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow text-gray-600 hover:text-red-500">
        <AiOutlineHeart size={18} />
      </button>

      {product.bestSeller && (
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
          Best Seller
        </span>
      )}

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-[200px] object-contain"
      />

      <div className="mt-3">
        {product.sponsored && (
          <p className="text-yellow-600 text-xs">Sponsored</p>
        )}

        <p className="text-sm font-medium leading-5 line-clamp-2">
          {product.name}
        </p>

        <div className="mt-1 text-sm">
          AED <span className="font-bold">{product.discountedPrice}</span>{" "}
          <span className="line-through text-gray-400 text-xs">
            {product.originalPrice}
          </span>{" "}
          <span className="text-green-600 text-xs font-bold">
            {product.discountPercent}
          </span>
        </div>

        <div className="text-xs text-gray-600 mt-1">
          ⭐ {product.rating} ({product.reviews})
        </div>

        {product.soldRecently && (
          <div className="text-xs text-green-700 mt-1">
            🛒 {product.soldRecently}+ sold recently
          </div>
        )}

        {product.freeDelivery && (
          <div className="text-xs text-blue-700 mt-1">🚚 Free Delivery</div>
        )}

        {product.express && (
          <span className="inline-block mt-2 px-2 py-1 bg-yellow-400 text-black text-xs rounded">
            express
          </span>
        )}
      </div>
    </div>
  );
};
export default ProductCard;
