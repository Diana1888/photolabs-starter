import React, {  useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { countLikes, setCountLikes } = props;
  const [favorite, setFavorite] = useState(false);

  const handleFavButton = () => {
    setFavorite(!favorite);
  };

  const handleToggleBtn = () => {
    favorite ?
    setCountLikes(countLikes - 1):
    setCountLikes(countLikes + 1);

    handleFavButton();
  }


  return (
    <div className="photo-list__fav-icon" onClick={handleToggleBtn} >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favorite}/>
     </div>
     </div>

  );
}

export default PhotoFavButton;