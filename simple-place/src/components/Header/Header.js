import React, { useState } from "react";
import { HeaderWrapper, Nav, IconsWrapper } from "./Header-styles";
import { Logo } from "../../App-styles";
import { MainContainer } from "../../App-styles";
import Icon from "../Icon/Icon";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { userOperations, userSelectors } from "../../store/user/index.js";
import { confirmationModalOperations } from "../../store/confirmationModal";
import { useDispatch, useSelector } from "react-redux";
import AddPostModal from "../AddPostModal/AddPostModal";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../services/CookiesService";

const Header = () => {
  const username = useSelector(userSelectors.getUser()).user;
  const img = useSelector(userSelectors.getUser()).profileImg;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const logOutAccount = () => {
    deleteCookie("id");
    deleteCookie("username");
    dispatch(confirmationModalOperations.closeModal());
    dispatch(userOperations.setNewUser({ user: null, id: null }));
    navigate("/");
  };

  const showConfirmationModal = () => {
    dispatch(
      confirmationModalOperations.customizeModal({
        title: "Are you sure you want to log out?",
        actionBtnText: "Log out",
        actionBtnHandler: logOutAccount,
      })
    );
    dispatch(confirmationModalOperations.setShowModal(true));
  };

  if (!username) return null;

  return (
    <HeaderWrapper>
      <MainContainer>
        <Nav>
          <Logo to="/">SimplePlace</Logo>
          <SearchBar />
          <IconsWrapper>
            <Icon path="/" type="home" />
            <Icon pointer type="add" onClick={() => setShowModal(!showModal)} />
            <Icon pointer type="logout" onClick={showConfirmationModal} />
            <ProfileIcon username={username} src={img} cursor="pointer" />
          </IconsWrapper>
        </Nav>
      </MainContainer>
      {showModal && <AddPostModal setShowModal={setShowModal} />}
    </HeaderWrapper>
  );
};

export default Header;
