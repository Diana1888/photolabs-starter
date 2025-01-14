import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

//Component to display like
const FavBadge = ({ isFavPhotoExist }) => {
  //If favPhotos array has photo then display alert
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} />
    </div>
  );
};

export default FavBadge;