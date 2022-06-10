import React from "react";
import { Wrapper } from "./Recommendation-styles";
import { SubscribeButton } from "../../App-styles";
import { userOperations } from "../../store/user";
import { userSelectors } from "../../store/user";
import { useSelector, useDispatch } from "react-redux";
import UserWrapper from "../UserWrapper/UserWrapper";

const Recommendation = ({ id, profileImg, username }) => {
  const following = useSelector(userSelectors.getUser()).following;
  const dispatch = useDispatch();

  const followingHandler = () => {
    dispatch(userOperations.followUser(id));
  };

  const unfollowingHandler = () => {
    dispatch(userOperations.unfollowUser(id));
  };

  return (
    <Wrapper>
      <UserWrapper
        profileImg={profileImg}
        username={username}
        size={"36px"}
        weight={"600"}
      />
      {!following.includes(id) && (
        <SubscribeButton onClick={followingHandler}>Follow</SubscribeButton>
      )}
      {following.includes(id) && (
        <SubscribeButton onClick={unfollowingHandler}>Unfollow</SubscribeButton>
      )}
    </Wrapper>
  );
};

export default Recommendation;
