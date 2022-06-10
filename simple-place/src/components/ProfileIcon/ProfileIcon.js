import React from "react";
import { Wrapper, Avatar, UserLink } from "./ProfileIcon-styles";

const ProfileIcon = ({ src, username, isLink = true, ...rest }) => {
  return (
    <Wrapper {...rest}>
      {username && isLink && (
        <UserLink to={`/${username}`}>
          <Avatar {...rest} src={src}></Avatar>
        </UserLink>
      )}
      {username && !isLink && <Avatar {...rest} src={src}></Avatar>}
      {!username && <Avatar {...rest} src={src}></Avatar>}
    </Wrapper>
  );
};

export default ProfileIcon;
