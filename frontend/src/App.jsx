import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';
import ModalLikedPhotos from 'routes/ModalLikePhotos';


const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    selectedTopic,
    displayLikedPhotos
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
        selectedTopic={selectedTopic} 
        displayLikedPhotos={displayLikedPhotos}/>
      {state.showModal && <PhotoDetailsModal
        state={state}
        photos={state.photoData}
        modalPhoto={state.modalPhoto}
        favPhotos={state.favPhotos}
        handleModalDetails={setPhotoSelected}
        toggleFav={updateToFavPhotoIds}
        closeModal={onClosePhotoDetailsModal} />}
        {state.showAllFav && <ModalLikedPhotos 
        favPhotos={state.favPhotos}
        closeModal={onClosePhotoDetailsModal}
        />}
    </div>
  );
};

export default App;
