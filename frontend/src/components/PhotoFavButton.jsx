import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { toggleFav, photo, favPhotos } = props;
  // Check if photo is in array of favPhotos
  const likedPhoto = favPhotos.includes(photo.id);

  const handleToggleButton = () => {
    toggleFav(photo.id);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleToggleButton} >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={likedPhoto} />
      </div>
    </div>
  );
}

export default PhotoFavButton;