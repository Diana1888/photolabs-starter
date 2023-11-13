import { useState } from "react";


const useApplicationData = () => {
    const [state, setState] = useState({
      countLikes: 0,
      showModal: false,
      modalPhoto: null
    })

    const updateToFavPhotoIds =(updateToFavPhotoIds) => {
      setState((prev) => {
        return {
          ...prev,
          countLikes: prev.countLikes
        }
      })
    }

    const setPhotoSelected = (modalPhoto) => {
      setState((prev) => {
        return {
          ...prev, modalPhoto,
          showModal: !prev.modalPhoto
        }
      })

    }

    const onClosePhotoDetailsModal = () => {
      setState((prev) => {
        return {
          showModal: false
        }
      })
    }

    return {
      state,
      updateToFavPhotoIds,
      setPhotoSelected,
      onClosePhotoDetailsModal
    }
}

export default useApplicationData;