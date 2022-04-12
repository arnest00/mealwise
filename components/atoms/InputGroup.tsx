type InputProps = {
  inputName: string,
  inputType: 'text' | 'number' | 'url',
  isRequired: boolean,
  placeholder?: string
};

const InputGroup = ({ inputName, inputType, isRequired, placeholder }: InputProps ) => {
  return (
    <div className="input-group">
      <label htmlFor={inputName} className="input-group__label">
        {inputName}
      </label>
      <input
        type={inputType}
        name={inputName}
        required={isRequired}
        placeholder={placeholder}
        className="input-group__input" />
    </div>
  );
};

export default InputGroup;
