import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {state, handleModalDetails, toggleFav} = props;



  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={state.favPhotos.length > 0}/>
      <PhotoList state={state} handleModalDetails={handleModalDetails} toggleFav={toggleFav}/>
    </div>
  );
};

export default HomeRoute;
