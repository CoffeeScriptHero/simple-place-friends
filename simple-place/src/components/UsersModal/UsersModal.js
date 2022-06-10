import React, { useEffect, useState } from "react";
import {
  Wrapper,
  ModalContent,
  ModalHeader,
  ModalText,
  UsersWrapper,
  CrossWrapper,
  NoPeopleText,
} from "./UsersModal-styles";
import { Modal } from "../../App-styles";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";
import { useSelector } from "react-redux";
import { usersModalSelectors } from "../../store/usersModal/";
import { userSelectors } from "../../store/user";
import { useRef } from "react";
import UserModal from "../UserModal/UserModal";
import { useNavigate, useParams } from "react-router-dom";

const UsersModal = ({ setShowModal = null }) => {
  // -------------Modal
  const users = useSelector(usersModalSelectors.getUsers());
  const type = useSelector(usersModalSelectors.getModalType());
  const modalWindowRef = useRef(true);
  const crossRef = useRef(null);
  let usersList;
  // ------------------
  // -------------Userpage
  const userpage = useParams().username;
  const mainUser = useSelector(userSelectors.getUser());
  const [isMainUser, setIsMainUser] = useState(false);
  // ---------------------
  // ------------------etc
  const navigate = useNavigate();
  //

  const closeModal = () => {
    if (setShowModal !== null) {
      setShowModal(false);
    } else {
      navigate(`/${userpage}`);
    }
  };

  const closeModalOnArea = (e) => {
    if (
      !modalWindowRef.current.contains(e.target) ||
      crossRef.current.contains(e.target)
    ) {
      closeModal();
    }
  };

  useEffect(() => {
    if (type === null) closeModal();

    if (mainUser.user === userpage) {
      setIsMainUser(true);
    }
  }, []);

  if (users !== null) {
    usersList = users.map((u) => (
      <UserModal
        key={u.id}
        isMainUser={isMainUser}
        type={type}
        username={u.username}
        id={u.id}
        mainId={mainUser.id}
        img={u.profileImg}
      />
    ));
  }

  return (
    <Wrapper>
      <Modal onClick={closeModalOnArea}>
        <ModalContent ref={modalWindowRef}>
          <ModalHeader>
            <ModalText>{type}</ModalText>
            <CrossWrapper ref={crossRef}>
              <Icon
                pointer
                type="cross"
                width={"16px"}
                height={"16px"}
                onClick={closeModal}
              />
            </CrossWrapper>
          </ModalHeader>
          {users === null && <Loader />}
          {users !== null && users.length === 0 && (
            <UsersWrapper noUsers>
              <Icon type={"people"} width={"90px"} height={"90px"} />
              <NoPeopleText>There is no one here, yet</NoPeopleText>
            </UsersWrapper>
          )}
          {users !== null && users.length > 0 && (
            <UsersWrapper>{usersList}</UsersWrapper>
          )}
        </ModalContent>
      </Modal>
    </Wrapper>
  );
};

export default UsersModal;
