import { ChangeEventHandler } from 'react';

type InputProps = {
  inputName: string,
  inputType: 'text' | 'number' | 'url',
  isRequired: boolean,
  onChange: ChangeEventHandler,
  value?: string | number,
};

const InputGroup = ({
  inputName,
  inputType,
  isRequired,
  onChange,
  value,
}: InputProps) => {
  const labelClasses = isRequired ? 'input-group__label' : 'input-group__label input-group__label--optional';

  return (
    <div className="input-group">
      <label htmlFor={inputName} className={labelClasses}>
        {inputName}
        {!isRequired && ' (optional)'}
      </label>
      <input
        type={inputType}
        name={inputName}
        required={isRequired}
        onChange={onChange}
        value={value}
        className="input-group__input"
      />
    </div>
  );
};

InputGroup.defaultProps = {
  value: '',
};

export default InputGroup;
