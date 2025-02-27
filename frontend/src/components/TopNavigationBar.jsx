import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

//Component to display navbar
const TopNavigation = (props) => {
  const { isFavPhotoExist, topic, selectedTopic } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topic} selectedTopic={selectedTopic} />
      <FavBadge isFavPhotoExist={isFavPhotoExist} /> 
    </div>
  );
};

export default TopNavigation;