import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { state, handleModalDetails, toggleFav, photos, topic, selectedTopic, favPhotos } = props;

  return (
    <div className="home-route">
      <TopNavigation topic={topic} isFavPhotoExist={state.favPhotos.length > 0} selectedTopic={selectedTopic} />
      <PhotoList photos={photos}
        handleModalDetails={handleModalDetails}
        toggleFav={toggleFav}
        favPhotos={favPhotos} />
    </div>
  );
};

export default HomeRoute;
