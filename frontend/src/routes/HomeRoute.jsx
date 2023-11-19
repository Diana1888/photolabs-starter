import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const { state, handleModalDetails, toggleFav, photos, topic, selectedTopic, favPhotos, displayLikedPhotos } = props;

  return (
    <div className="home-route">
      <TopNavigation topic={topic}
        isFavPhotoExist={state.favPhotos.length > 0} //Check if favPhotos array has photo 
        selectedTopic={selectedTopic} 
        displayLikedPhotos={displayLikedPhotos}/>
      <PhotoList photos={photos}
        handleModalDetails={handleModalDetails}
        toggleFav={toggleFav}
        favPhotos={favPhotos} />
    </div>
  );
};

export default HomeRoute;
