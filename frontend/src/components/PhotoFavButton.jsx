import React, { useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { toggleFav, photo, favPhotos } = props;
  const likedPhoto = favPhotos.includes(photo);



  const handleToggleButton = () => {
    toggleFav(photo);
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