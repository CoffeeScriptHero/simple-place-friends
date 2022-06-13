import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  receiveData,
  changeUsername,
  deleteProfileImg,
} from "../../services/UserService";
import { getUserPosts } from "../../services/PostsService";
import Loader from "../../components/Loader/Loader";
import ProfileIcon from "../../components/ProfileIcon/ProfileIcon";
import Icon from "../../components/Icon/Icon";
import {
  UserContainer,
  InfoWrapper,
  Username,
  UsernameWrapper,
  ErrorText,
  UserInfo,
  InfoText,
  AccountInfo,
  SubscribeButton,
  Number,
} from "./User-styles";
import UserPosts from "../../components/UserPosts/UserPosts";
import { useDispatch, useSelector } from "react-redux";
import { usersModalOperations } from "../../store/usersModal";
import { userOperations } from "../../store/user";
import { userSelectors } from "../../store/user";
import { useNavigate, Outlet } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { setCookie } from "../../services/CookiesService";
import { confirmationModalOperations } from "../../store/confirmationModal";
import { postModalSelectors } from "../../store/postModal";

const User = () => {
  const [userExist, setUserExist] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [posts, setPosts] = useState([]);
  const [editableUsername, setEditableUsername] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const postModalInfo = useSelector(postModalSelectors.getModalInfo());
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usernameRef = useRef(null);
  const mainUser = useSelector(userSelectors.getUser());
  const [profilePic, setProfilePic] = useState(null);
  const username = useParams().username;
  const isMainUser = mainUser.user === username;

  const userModalHandler = (type) => {
    dispatch(usersModalOperations.setNewModalType(type));
    if (type === "Followers") {
      dispatch(usersModalOperations.getFollowers(username));
      navigate("followers");
    } else if (type === "Following") {
      dispatch(usersModalOperations.getFollowing(username));
      navigate("following");
    }
  };

  const followingHandler = () => {
    dispatch(userOperations.followUser(userData.id));
    userData.followers.length += 1;
  };

  const unfollowingHandler = () => {
    dispatch(userOperations.unfollowUser(userData.id));
    userData.followers.length -= 1;
  };

  const usernameHandler = () => {
    const newUsername = usernameRef.current.textContent;
    const usernameRegex = /^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+$/;

    if (editableUsername === true) {
      if (!usernameRegex.test(newUsername)) {
        setErrorText("Hmm, that login doesn't look right.");
      } else if (!(newUsername.length >= 4 && newUsername.length <= 20)) {
        setErrorText("Min 4 characters and 20 max required");
      } else {
        changeUsername({ newUsername, userId: mainUser.id })
          .then((res) => res.json())
          .then((data) => {
            if (data.status === 200) {
              dispatch(userOperations.updateUsername(data.username));
              setErrorText(null);
              setEditableUsername(false);
              setCookie("username", data.username, {
                expires: new Date("12/31/40"),
              });
              navigate(`/${data.username}`);
            } else {
              setErrorText(data.message);
            }
          });
      }
    } else {
      setEditableUsername((prevState) => !prevState);
    }
  };

  const cancelEditingHandler = () => {
    setEditableUsername(false);
    setErrorText(null);
    usernameRef.current.textContent = username;
  };

  useEffect(() => {
    receiveData({ username: username }, "/api/main_user/get-userpage")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setUserData(data);
          setUserExist(true);
          setProfilePic(data.profileImg);
          getUserPosts(data.id)
            .then((res) => res.json())
            .then((data) => {
              if (data.message === "allowed") {
                setPosts(data.posts);
                setPostsLoaded(true);
              }
            });
        } else {
          setPosts(null);
          setUserData(null);
          setPostsLoaded(false);
          setUserExist(false);
          navigate(`/${username}`);
        }
        setIsLoading(false);
      });
  }, [
    isLoading,
    mainUser.addedPost,
    mainUser.profileImg,
    postModalInfo.username,
  ]);

  if (isLoading && !userExist) {
    return <Loader />;
  } else if (!isLoading && !userExist && !userData) {
    return <NotFound />;
  }

  if (userData.username !== username && isLoading === false) {
    setPostsLoaded(false);
    setIsLoading(true);
    setUserExist(false);
    setUserData(null);
  }

  const deleteProfilePicHandler = () => {
    dispatch(confirmationModalOperations.closeModal());
    deleteProfileImg({
      userId: mainUser.id,
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(userOperations.updateProfilePic(data.image));
      });
  };

  const showConfirmationModal = () => {
    dispatch(
      confirmationModalOperations.customizeModal({
        title: "Change the profile photo",
        warning: null,
        actionBtnText: "Delete the current photo",
        extraBtnText: "Upload a photo",
        actionBtnHandler: deleteProfilePicHandler,
      })
    );
    dispatch(confirmationModalOperations.setShowModal(true));
  };

  return (
    <UserContainer>
      <InfoWrapper>
        <ProfileIcon
          src={profilePic}
          width={"150px"}
          height={"150px"}
          padding={"0 75px"}
          cursor={isMainUser ? "pointer" : "default"}
          onClick={isMainUser ? showConfirmationModal : undefined}
        />
        <UserInfo>
          <UsernameWrapper>
            <Username
              suppressContentEditableWarning={true}
              ref={usernameRef}
              editableUsername={editableUsername}
            >
              {userData.username}
            </Username>
            {isMainUser && (
              <Icon
                type="pencil"
                width="16px"
                height="16px"
                pointer
                position="absolute"
                color="#464244"
                top="12px"
                right="-20px"
                onClick={usernameHandler}
              />
            )}
            {editableUsername && (
              <Icon
                type="cross"
                width="15px"
                height="15px"
                pointer
                position="absolute"
                fill="#464244"
                top="12px"
                right="-40px"
                onClick={cancelEditingHandler}
              />
            )}
            <ErrorText>{errorText}</ErrorText>
          </UsernameWrapper>
          <AccountInfo>
            <InfoText>
              <Number>{posts.length}</Number> publications
            </InfoText>
            <InfoText
              onClick={userModalHandler.bind(this, "Followers", username)}
            >
              <Number>
                {isMainUser && mainUser.followers.length}
                {!isMainUser && userData.followers.length}
              </Number>{" "}
              followers
            </InfoText>
            <InfoText
              onClick={userModalHandler.bind(this, "Following", username)}
            >
              <Number>
                {isMainUser && mainUser.following.length}
                {!isMainUser && userData.following.length}
              </Number>{" "}
              following
            </InfoText>
          </AccountInfo>
          {!isMainUser && !mainUser.following.includes(userData.id) && (
            <SubscribeButton
              onDoubleClick={(e) => e.preventDefault()}
              onClick={followingHandler}
            >
              Follow
            </SubscribeButton>
          )}
          {!isMainUser && mainUser.following.includes(userData.id) && (
            <SubscribeButton
              onDoubleClick={(e) => e.preventDefault()}
              onClick={unfollowingHandler}
            >
              Unfollow
            </SubscribeButton>
          )}
        </UserInfo>
      </InfoWrapper>
      <UserPosts userId={userData.id} posts={posts} postsLoaded={postsLoaded} />
      <Outlet />
    </UserContainer>
  );
};

export default User;
