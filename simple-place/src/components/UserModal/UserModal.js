import React from "react";
import { UserWrapper, UsernameWrapper, Button } from "./UserModal-styles";
import Username from "../Username/Username";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import { useSelector } from "react-redux";
import { userSelectors } from "../../store/user";
import { useDispatch } from "react-redux";
import { userOperations } from "../../store/user";
import { usersModalOperations } from "../../store/usersModal";

const UserModal = ({ isMainUser, type, username, id, mainId, img }) => {
  const following = useSelector(userSelectors.getUser()).following;
  const dispatch = useDispatch();
  const isMainUserFollowers = isMainUser && type === "Followers";
  const isMainUserField = mainId === id;

  const followingHandler = () => {
    dispatch(userOperations.followUser(id));
  };

  const unfollowingHandler = () => {
    dispatch(userOperations.unfollowUser(id));
  };

  const deleteHandler = () => {
    dispatch(userOperations.deleteUser(id));
    dispatch(usersModalOperations.deleteUser(username));
  };

  return (
    <UserWrapper>
      <ProfileIcon
        width={"30px"}
        height={"30px"}
        padding={"0 10px 0 0"}
        src={img}
        username={username}
      />
      <UsernameWrapper>
        <Username username={username} />
      </UsernameWrapper>
      {!isMainUserField && isMainUserFollowers && (
        <Button onClick={deleteHandler}>Delete</Button>
      )}
      {!isMainUserField && !isMainUserFollowers && !following.includes(id) && (
        <Button onClick={followingHandler}>Follow</Button>
      )}
      {!isMainUserField && !isMainUserFollowers && following.includes(id) && (
        <Button onClick={unfollowingHandler}>Unfollow</Button>
      )}
    </UserWrapper>
  );
};

export default UserModal;
