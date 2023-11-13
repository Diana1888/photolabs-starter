import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { handleModalDetails, modalPhoto, countLikes, setCountLikes } = props;
  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button">
        <img onClick={handleModalDetails} src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__images'>
        <PhotoFavButton countLikes={countLikes} setCountLikes={setCountLikes} />
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
      </div>

      <div className='photo-details-modal__images'>
        <p className='photo-details-modal__header'>Similar Photos</p>
        <PhotoList />
      </div>
    </div>


  );
};

export default PhotoDetailsModal;
