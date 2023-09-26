import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export class ImageGalleryItem extends Component {
  static defaultProps = {
    src: '',
    alt: '',
    largeImage: '',
  };

  makeModal = () => {
    const { largeImage, alt } = this.props;
    this.props.isShowModal(largeImage, alt);
  };

  render() {
    const { src, alt } = this.props;

    return (
      <li className={css.imageGalleryItem}>
        <img src={src} alt={alt} onClick={this.makeModal} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  isShowModal: PropTypes.func.isRequired,
};
