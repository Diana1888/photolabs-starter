import React, { useState } from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';



// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal
  } = useApplicationData();


  return (
    <div className="App">
    <HomeRoute state={state} photo={state.photoData} topic={state.topicData} handleModalDetails={setPhotoSelected}  toggleFav={updateToFavPhotoIds}/>
    {state.showModal && <PhotoDetailsModal 
    state={state}
    photo={state.modalPhoto} 
    handleModalDetails={setPhotoSelected}
    toggleFav={updateToFavPhotoIds} 
    closeModal={onClosePhotoDetailsModal}/>}
      </div>
  );
};

export default App;
