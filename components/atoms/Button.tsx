import { MouseEventHandler } from "react";

type ButtonProps = {
  buttonType: 'button' | 'submit' | 'reset',
  buttonName: string,
  modifier?: string,
  onClick?: MouseEventHandler,
};

const Button = ({ buttonType, buttonName, modifier, onClick }: ButtonProps ) => {
  const classes = modifier ? `button button${modifier}` : `button`;

  return (
    <button
      type={buttonType}
      className={classes}
      onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;
