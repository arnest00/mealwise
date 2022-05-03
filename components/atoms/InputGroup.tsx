import { ChangeEventHandler } from "react";

type InputProps = {
  inputName: string,
  inputType: 'text' | 'number' | 'url',
  isRequired: boolean,
  value?: string,
  onChange?: ChangeEventHandler
};

const InputGroup = ({ inputName, inputType, isRequired, value, onChange }: InputProps ) => {
  const labelClasses = isRequired ? "input-group__label" : "input-group__label input-group__label--optional";

  return (
    <div className="input-group">
      <label htmlFor={inputName} className={labelClasses}>
        {inputName}
      </label>
      <input
        type={inputType}
        name={inputName}
        required={isRequired}
        value={value}
        onChange={onChange}
        className="input-group__input" />
    </div>
  );
};

export default InputGroup;
