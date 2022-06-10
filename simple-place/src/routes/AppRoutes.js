import { Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp.js";
import Feed from "../pages/Feed/Feed.js";
import { useDispatch } from "react-redux";
import { checkUserLogged, setUserData } from "../services/UserService.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import User from "../pages/User/User.js";
import UsersModal from "../components/UsersModal/UsersModal.js";
import PostModal from "../components/PostModal/PostModal.js";
import { userOperations } from "../store/user/index.js";
import { getCookie } from "../services/CookiesService.js";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = getCookie("id");

  useEffect(() => {
    checkUserLogged().then((isLogged) => {
      if (isLogged) {
        setUserData(dispatch);
      } else {
        dispatch(userOperations.setNewUser({ user: null, id: null }));
        navigate("/");
      }
    });
  }, [id]);

  return (
    <Routes>
      <Route path="/" element={id ? <Feed /> : <SignUp />}>
        <Route path="p/:id" element={<PostModal />} />
      </Route>
      <Route path=":username" element={id && <User />}>
        <Route path="followers" element={<UsersModal />} />
        <Route path="following" element={<UsersModal />} />
        <Route path="p/:id" element={<PostModal />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
