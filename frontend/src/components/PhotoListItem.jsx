import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoDetailsModal from "routes/PhotoDetailsModal";



const PhotoListItem = (props) => {

  const { photo, countLikes, setCountLikes, handleModalDetails} = props;
  const { id, urls, user, location } = photo;

  const handleShowModal = (photo) => {
    handleModalDetails(photo)
  }
  

  return (

    <div className="photo-list__item">
      <PhotoFavButton 
      key={id} 
      photo={photo} countLikes={countLikes} setCountLikes={setCountLikes}/>
      <img className="photo-list__image" src={urls.regular} alt="image" onClick={() => handleShowModal(photo)}/>
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
