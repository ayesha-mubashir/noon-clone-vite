import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { ProductCard } from "../../utils/ProductsConst";

const ProductGrid = () => {
  const { filteredProducts } = useContext(ProductContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
