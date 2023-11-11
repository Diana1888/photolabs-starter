import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = () => {
  const [countLikes, setCountLikes] = useState(0);



  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={countLikes}/>
      <PhotoList countLikes={countLikes} setCountLikes={setCountLikes}/>
    </div>
  );
};

export default HomeRoute;
