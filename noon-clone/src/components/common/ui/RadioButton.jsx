const RadioButton = ({ name, options, selectedValue, onChange }) => {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <label key={option.value} className="flex items-center">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={String(selectedValue) === String(option.value)}
            onChange={onChange}
            className="mr-2 cursor-pointer"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
export default RadioButton;
