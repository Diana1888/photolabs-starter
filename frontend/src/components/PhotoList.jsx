import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { toggleFav, handleModalDetails, photos, favPhotos } = props;

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          key={photo.id}
          favPhotos={favPhotos}
          photo={photo}
          toggleFav={toggleFav}
          handleModalDetails={handleModalDetails} />
      ))}
    </ul>
  );
};

export default PhotoList;
