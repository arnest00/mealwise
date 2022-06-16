import { MouseEventHandler } from 'react';

import Button from './Button';

type ModalProps = {
  children?: React.ReactNode,
  onClick: MouseEventHandler,
};

const Modal = ({ children, onClick }: ModalProps) => (
  <div className="obj-modal">
    <section className="cmp-modal">
      <Button
        buttonType="button"
        buttonName="close"
        onClick={onClick}
      />
      { children }
    </section>
  </div>
);

Modal.defaultProps = {
  children: null,
};

export default Modal;
