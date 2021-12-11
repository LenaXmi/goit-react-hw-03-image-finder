import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  render() {
    return createPortal(
      <div className={s.Overlay}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
