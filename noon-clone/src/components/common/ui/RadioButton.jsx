const RadioButton = ({ name, options, selectedValue, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <label key={option.value}>
          <input
            className="mr-2 cursor-pointer"
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => onChange(e, option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
