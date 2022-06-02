import { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus, faMinus, faPencil } from '@fortawesome/free-solid-svg-icons';

type AddButtonProps = {
  plus?: boolean,
  minus?: boolean,
  pencil?: boolean,
  onClick: MouseEventHandler,
};

const IconButton = ({
  plus, minus, pencil, onClick,
}: AddButtonProps) => (
  <button
    type="button"
    className="icon-button"
    onClick={onClick}
  >
    {plus && <FontAwesomeIcon icon={faPlus} />}
    {minus && <FontAwesomeIcon icon={faMinus} />}
    {pencil && <FontAwesomeIcon icon={faPencil} />}
  </button>
);

IconButton.defaultProps = {
  plus: false,
  minus: false,
  pencil: false,
};

export default IconButton;
