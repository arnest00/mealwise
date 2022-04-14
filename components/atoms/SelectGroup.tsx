type SelectProps = {
  selectName: string,
  isRequired: boolean,
  options: string[]
};

const SelectGroup = ({ selectName, isRequired, options }: SelectProps ) => {
  const labelClasses = isRequired ? "input-group__label" : "input-group__label input-group__label--optional";

  return (
    <div className="input-group">
      <label htmlFor={selectName} className={labelClasses}>
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
