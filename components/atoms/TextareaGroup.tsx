interface TextareaProps {
  textareaName: string
};

const TextareaGroup = ({ textareaName }: TextareaProps ) => {
  return (
    <div>
      <label htmlFor={textareaName}>
        {textareaName}
      </label>
      <textarea name={textareaName}></textarea>
    </div>
  );
};

export default TextareaGroup;
