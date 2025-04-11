const RatingSlider = ({ rating, onChange }) => {
  return (
    <div className="mt-4">
      <h3 className="font-bold mb-1">Product Rating</h3>
      <div className="flex items-center gap-2 w-full max-w-[300px]">
        <input
          type="range"
          min={0}
          max={5}
          step={0.1}
          value={rating}
          onChange={onChange}
          className="flex-1 h-[6px]"
        />
        <span className="text-xs w-[32px] text-right">
          {rating.toFixed(1)}★
          {/* {typeof rating === "number" ? rating.toFixed(1) : "0.0"}★ */}
        </span>
      </div>
    </div>
  );
};

export default RatingSlider;
