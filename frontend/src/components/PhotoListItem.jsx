import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = (props) => {

  
  const { photo, countLikes, setCountLikes} = props;
  const { id, urls, user, location } = photo;

  return (

    <div className="photo-list__item">
      <PhotoFavButton 
      key={id} 
      photo={photo} countLikes={countLikes} setCountLikes={setCountLikes}/>
      <img className="photo-list__image" src={urls.regular} alt="image" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt="profile" />
        <div>
          <span className="photo-list__user-info">{user.username}</span>
          <div className="photo-list__user-info">
            <span className="photo-list__user-location ">{location.city}, {location.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
