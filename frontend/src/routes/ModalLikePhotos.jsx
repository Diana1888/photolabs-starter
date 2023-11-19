import React from 'react';
import closeSymbol from '../assets/closeSymbol.svg';


const ModalLikedPhotos = (props) => {
  const { favPhotos, closeModal } = props;

  console.log('LikedPhotosModal - Received photos:', favPhotos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img onClick={() => closeModal()} src={closeSymbol} alt="close symbol" />
      </button>
      <div className='photo-details-modal__top-bar'>
        {favPhotos.length > 0 ? (
          <>
            <h2 className='photo-details-modal__header'>Favorites Photos</h2>
            <div className='photo-list'>
              {favPhotos.map((photo) => (
                <img key={photo.id} className="photo-list__image" src={photo.urls.regular} />
              ))}
            </div>
          </>
        ) : (
          <p className='photo-details-modal__header'>No Favorites photos.</p>
        )}
      </div>
    </div>
  );
};

export default ModalLikedPhotos;