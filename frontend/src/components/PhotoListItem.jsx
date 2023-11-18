import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";


const PhotoListItem = (props) => {
  const { photo, toggleFav, handleModalDetails, favPhotos } = props;
  const { id, urls, user, location } = photo;

  //Show modal details when photo is clicked
  const handleShowModal = (photo) => {
    handleModalDetails(photo);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        key={id}
        favPhotos={favPhotos}
        photo={photo} toggleFav={toggleFav} />
      <img className="photo-list__image" src={urls.regular} alt="image"
        onClick={() => handleShowModal(photo)} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt="profile" />
        <div className="photo-list__user-info">
          <span>{user.username}</span>
          <br />
          <span className="photo-list__user-location ">{location.city}, {location.country}</span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
