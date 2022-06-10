import React from "react";
import { Wrapper } from "./UserWrapper-styles";
import ProfileIcon from "../ProfileIcon/ProfileIcon";
import Username from "../Username/Username";

const UserWrapper = ({
  profileImg,
  username,
  margin = "0 0 0 10px",
  fontSize = "16px",
  weight = "500",
  size = "34px",
  isComment = false,
  isLink = true,
  activeBackground = "white",
  ...rest
}) => {
  return (
    <Wrapper
      activeBackground={activeBackground}
      isComment={isComment}
      {...rest}
    >
      <ProfileIcon
        cursor="pointer"
        username={username}
        src={profileImg}
        width={size}
        height={size}
        isLink={isLink}
      />
      <Username
        username={username}
        margin={margin}
        weight={weight}
        fontSize={fontSize}
        isLink={isLink}
      />
    </Wrapper>
  );
};

export default UserWrapper;
