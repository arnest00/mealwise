type SelectProps = {
  selectName: string,
  isRequired: boolean,
  options: string[]
};

const SelectGroup = ({ selectName, isRequired, options }: SelectProps ) => {
  return (
    <div className="input-group">
      <label htmlFor={selectName} className="input-group__label">
        {selectName}
      </label>

      <select name={selectName} required={isRequired} className="input-group__select">
        {options.map((option, idx) => {
          return <option key={idx} value={option} className="input-group__option">{option}</option>
        })}
      </select>
    </div>
  );
};

export default SelectGroup;
