import { ChangeEventHandler } from 'react';

type SelectProps = {
  selectName: string,
  isRequired: boolean,
  onChange: ChangeEventHandler,
  value: string,
  options: string[]
};

const SelectGroup = ({
  selectName,
  isRequired,
  onChange,
  value,
  options,
}: SelectProps) => {
  const labelClasses = isRequired
    ? 'cmp-input-group__label'
    : 'cmp-input-group__label cmp-input-group__label--optional';

  return (
    <div className="cmp-input-group">
      <label htmlFor={selectName} className={labelClasses}>
        {selectName}
      </label>

      <select name={selectName} required={isRequired} onChange={onChange} value={value} className="cmp-input-group__select">
        {options.map((option) => (
          <option key={option} value={option} className="cmp-input-group__option">{option}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectGroup;
