import { MouseEventHandler } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

type AddButtonProps = {
  plus?: boolean,
  minus?: boolean,
  onClick: MouseEventHandler,
};

const IconButton = ({ plus, minus, onClick }: AddButtonProps ) => {
  return (
    <button
      type='button'
      className='icon-button'
      onClick={onClick}>
      {plus && <FontAwesomeIcon icon={faPlus} />}
      {minus && <FontAwesomeIcon icon={faMinus} />}
    </button>
  );
};

export default IconButton;
