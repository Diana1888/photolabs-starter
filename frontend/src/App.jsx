import React, { useState } from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicListItem from 'components/TopicListItem';
import TopicList from 'components/TopicList';
import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [countLikes, setCountLikes] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);

  const handleModalDetails = (modalPhoto) => {
    setModalPhoto(modalPhoto)
    setShowModal(!showModal)
  }

  return (
    <div className="App">
    <HomeRoute handleModalDetails={handleModalDetails} countLikes={countLikes} setCountLikes={setCountLikes}/>
    {showModal && <PhotoDetailsModal 
    modalPhoto={modalPhoto} 
    handleModalDetails={handleModalDetails}
    countLikes={countLikes} 
    setCountLikes={setCountLikes} />}


      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      {/* <PhotoList /> */}
      </div>
  );
};

export default App;
