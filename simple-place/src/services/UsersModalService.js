import { usersModalOperations } from "../store/usersModal";

export const modalHandler = (dispatch, id, setShowModal) => {
  dispatch(usersModalOperations.setNewModalType("Likes"));
  dispatch(usersModalOperations.getLiked(id, "post"));
  setShowModal(true);
};
