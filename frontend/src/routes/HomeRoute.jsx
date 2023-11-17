import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {state, handleModalDetails, toggleFav, photo, topic} = props;



  return (
    <div className="home-route">
      <TopNavigation topic={topic}  isFavPhotoExist={state.favPhotos.length > 0}/>
      <PhotoList state={state} photo={photo} handleModalDetails={handleModalDetails} toggleFav={toggleFav}/>
    </div>
  );
};

export default HomeRoute;
