const PriceRange = ({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  onSubmit,
}) => {
  return (
    <div className="mt-6 ">
      <h3 className="font-bold mb-2">Price</h3>
      <div className="flex gap-2 mb-2">
        <div className="flex items-center gap-1 ">
          <input
            type="number"
            placeholder="Min"
            className="border p-1 w-[60px] text-sm"
            value={minPrice}
            onChange={onMinPriceChange}
          />
          <span className="mt-1">to</span>
          <input
            type="number"
            placeholder="Max"
            className="border p-1 w-[60px] text-sm"
            value={maxPrice}
            onChange={onMaxPriceChange}
          />
        </div>
        <button
          className="bg-blue-600 text-white px-3 py-1 h-8 ml-2 rounded text-sm hover:bg-blue-400"
          onClick={onSubmit}
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default PriceRange;
