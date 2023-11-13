import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const {handleModalDetails, countLikes, setCountLikes } = props;



  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={countLikes}/>
      <PhotoList handleModalDetails={handleModalDetails} countLikes={countLikes} setCountLikes={setCountLikes}/>
    </div>
  );
};

export default HomeRoute;
