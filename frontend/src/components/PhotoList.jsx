import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";



const PhotoList = (props) => {
  const {  state, toggleFav, showModal, handleModalDetails} = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem 
        state={state}
        key={photo.id} 
        photo={photo} 
        toggleFav={toggleFav}
        showModal={showModal}
        handleModalDetails={handleModalDetails}/>
      ))}
    </ul>
  );
};

export default PhotoList;
