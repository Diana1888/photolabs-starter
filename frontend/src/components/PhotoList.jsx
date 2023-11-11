import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";



const PhotoList = (props) => {
  const {  countLikes, setCountLikes, showModal, handleModalDetails } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem 
        key={photo.id} 
        photo={photo} 
        countLikes={countLikes} 
        setCountLikes={setCountLikes}
        showModal={showModal}
        handleModalDetails={handleModalDetails}/>
      ))}
    </ul>
  );
};

export default PhotoList;
