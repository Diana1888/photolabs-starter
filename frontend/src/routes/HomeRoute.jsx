import React from 'react';
import { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  const [countLikes, setCountLikes] = useState(0);
  const {handleModalDetails} = props;



  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={countLikes}/>
      <PhotoList handleModalDetails={handleModalDetails} countLikes={countLikes} setCountLikes={setCountLikes}/>
    </div>
  );
};

export default HomeRoute;
