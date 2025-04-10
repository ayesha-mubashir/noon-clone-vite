const CheckBox = ({ name, options, selectedValues, onChange }) => {
  return (
    <div>
      {options.map((option) => (
        <div key={option}>
          <input
            className="cursor-pointer"
            type="checkbox"
            checked={selectedValues.includes(option)}
            onChange={() => onChange(option)}
          />
          <label className="ml-2">{option}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
