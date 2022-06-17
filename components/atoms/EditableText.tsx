import {
  ChangeEvent, FocusEvent, KeyboardEvent, useState,
} from 'react';

type EditableTextProps = {
  text: string,
  textId: string,
  setText: Function,
  dayId?: number | undefined,
};

const EditableText = ({
  text, textId, setText, dayId,
}: EditableTextProps) => {
  const [editValue, setEditValue] = useState(text);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setEditValue(e.currentTarget.value);

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur();
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    setText(textId, e.currentTarget.value, dayId);
  };

  return (
    <div className="cmp-editable-text">
      <label htmlFor={textId} className="cmp-editable-text__label">
        {`Previous value: ${text}`}
      </label>
      <input
        id={textId}
        className="cmp-editable-text__input"
        type="text"
        value={editValue}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => handleOnKeyDown(e)}
        onBlur={(e) => handleBlur(e)}
      />
    </div>
  );
};

EditableText.defaultProps = {
  dayId: undefined,
};

export default EditableText;
