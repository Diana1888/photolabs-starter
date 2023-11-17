import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { state, photo, toggleFav, closeModal } = props;

  const similarPhotos = photo.similar_photos;

  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button">
        <img onClick={() => closeModal()} src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
        <PhotoFavButton  state={state} photo={photo} toggleFav={toggleFav} favPhotos={state.favPhotos}/>
        <img className='photo-details-modal__image' src={photo.urls.full} alt="full-img" />

        <div className='photo-details-modal__header'>
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile " src={photo.user.profile} alt="profile" />
            <div className="photo-details-modal__photographer-info">
              <span >{photo.user.username}</span>
              <br />
              <span className="photo-details-modal__photographer-location ">{photo.location.city}, {photo.location.country}</span>

            </div>

          </div>
        </div>
      </div>

      <div className='photo-details-modal__images'>
        <p className='photo-details-modal__header'>Similar Photos</p>
        <div className='photo-details-modal__top-bar'>
        <PhotoList 
        state={state}
        photo={similarPhotos}
        favPhotos={state.favPhotos}
        toggleFav={toggleFav}/>
        </div>
      </div>
    </div>


  );
};

export default PhotoDetailsModal;
