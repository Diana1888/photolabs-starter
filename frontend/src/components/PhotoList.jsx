import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = (props) => {
  const {  state, toggleFav, showModal, handleModalDetails, photo} = props;

  return (
    <ul className="photo-list">
      {photo.map((photo) => (
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
