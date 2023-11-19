import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = (props) => {
  const { isFavPhotoExist, topic, selectedTopic, displayLikedPhotos } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topic} selectedTopic={selectedTopic} />
      <span onClick={displayLikedPhotos}>
      <FavBadge isFavPhotoExist={isFavPhotoExist} /> 
      </span>
    </div>
  );
};

export default TopNavigation;