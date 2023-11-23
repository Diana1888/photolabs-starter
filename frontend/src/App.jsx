import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';

//Main App component
const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    selectedTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        state={state}
        photos={state.photoData}
        topic={state.topicData}
        favPhotos={state.favPhotos}
        handleModalDetails={setPhotoSelected}
        toggleFav={updateToFavPhotoIds}
        selectedTopic={selectedTopic} />
      {state.showModal && <PhotoDetailsModal
        state={state}
        photos={state.photoData}
        modalPhoto={state.modalPhoto}
        favPhotos={state.favPhotos}
        handleModalDetails={setPhotoSelected}
        toggleFav={updateToFavPhotoIds}
        closeModal={onClosePhotoDetailsModal} />}
    </div>
  );
};

export default App;
