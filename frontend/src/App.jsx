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
  const [showModal, setShowModal] = useState(false);

  const handleModalDetails = () => {
    setShowModal(!showModal)
  }

  return (
    <div className="App">
    <HomeRoute handleModalDetails={handleModalDetails}/>
    {showModal && <PhotoDetailsModal handleModalDetails={handleModalDetails}/>}


      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      {/* <PhotoList /> */}
      </div>
  );
};

export default App;
