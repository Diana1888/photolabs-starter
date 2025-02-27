import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { photos, modalPhoto, toggleFav, closeModal, favPhotos, handleModalDetails } = props;

  const similarPhotos = modalPhoto.similar_photos;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img onClick={() => closeModal()} src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__images'>
        <PhotoFavButton photo={modalPhoto} toggleFav={toggleFav} favPhotos={favPhotos} />
        <img className='photo-details-modal__image' src={modalPhoto.urls.full} alt="full-img" />
        <div className='photo-details-modal__header'>
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile " src={modalPhoto.user.profile} alt="profile" />
            <div className="photo-details-modal__photographer-info">
              <span >{modalPhoto.user.username}</span>
              <br />
              <span className="photo-details-modal__photographer-location ">{modalPhoto.location.city}, {modalPhoto.location.country}</span>
            </div>
          </div>
        </div>
        <p className='photo-details-modal__header'>Similar Photos</p>
      </div>
      <div className='photo-details-modal__top-bar'>
        {Object.values(similarPhotos.map((similarPhoto) => ( //Map over values of similar photos
          <PhotoList
            key={similarPhoto.id}
            photos={photos.filter(photo => similarPhoto.id === photo.id)} //Pass only photos that has the same id (liked similar photos)
            favPhotos={favPhotos}
            toggleFav={toggleFav}
            handleModalDetails={handleModalDetails}
          />
        )))}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
