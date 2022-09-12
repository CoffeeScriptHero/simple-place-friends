import React, { useState } from "react";
import {
  HeaderWrapper,
  Nav,
  Logo,
  LogoWrapper,
  IconsWrapper,
} from "./Header-styles";
import { Image } from "../../App-styles";
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
import cow from "../../assets/images/cow.png";

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
          <LogoWrapper to="/">
            <Image src={cow} alt="cow logo" width="30px" height="32px"></Image>
            <Logo pointerEvents="none" fontSize="24px" to="/">
              RiseNet
            </Logo>
          </LogoWrapper>
          <SearchBar />
          <IconsWrapper>
            <Icon path="/" type="home" />
            <Icon pointer type="add" onClick={() => setShowModal(!showModal)} />
            <Icon path="/games/all" pointer type="gamepad" />
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
