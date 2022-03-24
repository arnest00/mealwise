interface SelectProps {
  selectName: string,
  isRequired: boolean,
  options: string[]
};

const SelectGroup = ({ selectName, isRequired, options }: SelectProps ) => {
  return (
    <div>
      <label htmlFor={selectName}>
        {selectName}
      </label>
      
      <select name={selectName} required={isRequired}>
        {options.map((option, idx) => (
          <option key={idx} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectGroup;
