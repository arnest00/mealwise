/* eslint-disable react/button-has-type */
import { MouseEventHandler } from 'react';

type ButtonProps = {
  buttonType: 'button' | 'submit' | 'reset',
  buttonName: string,
  modifier?: string,
  onClick?: MouseEventHandler,
};

const Button = ({
  buttonType,
  buttonName,
  modifier,
  onClick,
}: ButtonProps) => {
  const classes = modifier ? `button button${modifier}` : 'button';

  return (
    <button
      type={buttonType}
      className={classes}
      onClick={onClick}
    >
      {buttonName}
    </button>
  );
};

Button.defaultProps = {
  modifier: '',
  onClick: null,
};

export default Button;
