import { MouseEventHandler } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck, faPencil, faPlus, faMinus,
} from '@fortawesome/free-solid-svg-icons';

type AddButtonProps = {
  check?: boolean,
  pencil?: boolean,
  plus?: boolean,
  minus?: boolean,
  onClick: MouseEventHandler,
};

const IconButton = ({
  plus, minus, pencil, check, onClick,
}: AddButtonProps) => (
  <button
    type="button"
    className="cmp-icon-button"
    onClick={onClick}
  >
    {plus && <FontAwesomeIcon icon={faPlus} />}
    {minus && <FontAwesomeIcon icon={faMinus} />}
    {pencil && <FontAwesomeIcon icon={faPencil} />}
    {check && <FontAwesomeIcon icon={faCheck} />}
  </button>
);

IconButton.defaultProps = {
  plus: false,
  minus: false,
  pencil: false,
  check: false,
};

export default IconButton;
