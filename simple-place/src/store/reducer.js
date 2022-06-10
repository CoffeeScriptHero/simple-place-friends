import { combineReducers } from "redux";
import user from "./user";
import usersModal from "./usersModal";
import postModal from "./postModal";
import confirmationModal from "./confirmationModal";

const reducer = combineReducers({
  user,
  usersModal,
  postModal,
  confirmationModal,
});

export default reducer;
