import React, { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGallery.module.css';

export class ImageGallery extends Component {
  state = {
    isShowModal: false,
    largeImage: '',
    alt: '',
  };

  showModal = (largeImage, alt) => {
    this.setState({ isShowModal: true, largeImage, alt });
  };

  hideModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { isShowModal, largeImage, alt } = this.state;
    const { hideModal, showModal } = this;

    return (
      <>
        {isShowModal && (
          <Modal src={largeImage} alt={alt} onClick={hideModal} />
        )}

        <ul className={css.gallery}>
          {this.props.pictures.map(
            ({ id, webformatURL, tags, largeImageURL }) => {
              return (
                <ImageGalleryItem
                  key={id}
                  src={webformatURL}
                  alt={tags}
                  largeImage={largeImageURL}
                  isShowModal={showModal}
                />
              );
            }
          )}
        </ul>
      </>
    );
  }
}
