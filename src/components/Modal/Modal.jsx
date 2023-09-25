import React, { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
    window.addEventListener('mousedown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
    window.removeEventListener('mousedown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (code === 'Escape' || target === currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <div className={css.wrapper} onClick={this.closeModal}>
        <div className={css.modal_window}>
          <img src={src} alt={alt} width="800" height="600" />
        </div>
      </div>
    );
  }
}
