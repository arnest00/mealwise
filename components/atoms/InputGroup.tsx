import { ChangeEventHandler, KeyboardEventHandler } from 'react';

type InputProps = {
  inputName: string,
  inputType: 'text' | 'number' | 'url',
  isRequired: boolean,
  onChange: ChangeEventHandler,
  onKeyDown?: KeyboardEventHandler,
  value?: string | number,
};

const InputGroup = ({
  inputName,
  inputType,
  isRequired,
  onChange,
  onKeyDown,
  value,
}: InputProps) => {
  const labelClasses = isRequired
    ? 'cmp-input-group__label'
    : 'cmp-input-group__label cmp-input-group__label--optional';

  return (
    <div className="cmp-input-group">
      <label htmlFor={inputName} className={labelClasses}>
        {inputName}
        {!isRequired && ' (optional)'}
      </label>
      <input
        type={inputType}
        name={inputName}
        required={isRequired}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        className="cmp-input-group__input"
      />
    </div>
  );
};

InputGroup.defaultProps = {
  value: '',
  onKeyDown: null,
};

export default InputGroup;
