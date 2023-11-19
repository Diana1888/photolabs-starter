import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  DISPLAY_LIKED_PHOTOS: 'DISPLAY_LIKED_PHOTOS'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favPhotos: [...state.favPhotos, action.payload.photoId]
      };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favPhotos: state.favPhotos.filter((id) => id !== action.payload.photoId)
      };
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        modalPhoto: action.payload.photoData, showModal: true
      };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload,
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
        showAllFav: false
      };
      case ACTIONS.DISPLAY_LIKED_PHOTOS:
        console.log('Reducer: Display Liked Photos');
        return {
          ...state,
          showAllFav: true,
        };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}


const useApplicationData = () => {
  //Initial state for application
  const initialState = {
    favPhotos: [],
    showModal: false,
    modalPhoto: null,
    photoData: [],
    topicData: [],
    showAllFav: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    //Fetch Photos from the server
    fetch('/api/photos')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
      .catch((error) => {
        console.log('Error fetcning photos', error);
      });

    //Fetch Topics from the server
    fetch('/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
      .catch((error) => {
        console.log('Error fetcning topics', error);
      });
  }, []);

  const selectedTopic = (topicId) => {
    //Fetch Photos when specific topic selected
    fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data }))
      .catch((error) => {
        console.log('Error fetcning selected topics', error);
      });
  };

  const updateToFavPhotoIds = (photoId) => {
    //Function that allows to like and to unlike photo
    const likedPhoto = state.favPhotos.includes(photoId);
    if (likedPhoto) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { photoId } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { photoId } });
    }
  };

  const setPhotoSelected = (photoData) => {
    //Function to set selected photo for modal
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photoData } });
  };

  const displayLikedPhotos = () => {
    // Function to show modal with liked photos
    dispatch({ type: ACTIONS.DISPLAY_LIKED_PHOTOS });
  };

  const onClosePhotoDetailsModal = () => {
    //Function to close modal 
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };


  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    selectedTopic,
    displayLikedPhotos
  };
};

export default useApplicationData;