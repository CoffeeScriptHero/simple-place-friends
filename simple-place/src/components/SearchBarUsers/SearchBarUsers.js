import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { receiveData } from "../../services/UserService";
import { userSelectors } from "../../store/user";
import {
  Wrapper,
  UsersWrapper,
  UserWrapperLink,
  SearchText,
} from "./SearchBarUsers-styles";
import UserWrapper from "../UserWrapper/UserWrapper";
import Loader from "../Loader/Loader";

const SearchBarUsers = ({ usernameChunk, usersLoaded, setUsersLoaded }) => {
  const mainUser = useSelector(userSelectors.getUser());
  const [users, setUsers] = useState([]);

  const usersList = users.map((u) => (
    <UserWrapperLink to={`/${u.username}`} key={u.username}>
      <UserWrapper
        isLink={false}
        padding="8px 16px"
        activeBackground="rgba(var(--bb2,239,239,239),1)"
        profileImg={u.profileImg}
        username={u.username}
      />
    </UserWrapperLink>
  ));

  useEffect(() => {
    receiveData({ usernameChunk }, "/api/users/get-matched-users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setUsersLoaded(true);
      });
  }, [usernameChunk, mainUser]);

  return (
    <Wrapper>
      {!usersLoaded && <Loader />}
      {usersLoaded && (
        <UsersWrapper showText={!users.length}>
          {!usernameChunk.length && (
            <SearchText>
              Write the username of the person you want to find
            </SearchText>
          )}
          {!!usernameChunk.length && !!users.length && usersList}
          {!!usernameChunk.length && !users.length && (
            <SearchText>There is no such user</SearchText>
          )}
        </UsersWrapper>
      )}
    </Wrapper>
  );
};

export default SearchBarUsers;
