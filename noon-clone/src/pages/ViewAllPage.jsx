import FiltersSidebar from "../components/FiltersSideBar/FiltersSideBar";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import ScrollFilterBar from "../components/ScrollFilterBar/ScrollFilterBar";

const BestSellers = () => {
  return (
    <div className="container mx-auto my-6 px-4 min-h-screen">
      <ScrollFilterBar />

      <div className="flex">
        <FiltersSidebar />

        <div className="flex-1 p-4">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
