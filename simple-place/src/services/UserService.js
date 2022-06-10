import { getCookie } from "./CookiesService";
import { userOperations } from "../store/user";

export const receiveData = async (data, request) => {
  const response = await fetch(request, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
};

export const setUserData = async (dispatch) => {
  receiveData({ id: getCookie("id") }, "/api/main_user/get-user-data")
    .then((res) => res.json())
    .then((res) => {
      dispatch(
        userOperations.setNewUser({
          user: getCookie("username"),
          id: getCookie("id"),
          profileImg: res.profileImg,
          following: res.following,
          followers: res.followers,
        })
      );
    });
};

export const checkUserLogged = async () => {
  const id = getCookie("id");
  let isLogged = false;

  if (id) {
    await receiveData({ id }, "/api/main_user/check-main-user")
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "allowed") isLogged = true;
      });
  }

  return isLogged;
};

export const changeUsername = async (data) => {
  const response = await fetch("/api/main_user/change-username", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
};

export const changeProfileImg = async (data) => {
  const response = await fetch("/api/main_user/change-profile-img", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
};

export const deleteProfileImg = async (data) => {
  const response = await fetch("/api/main_user/delete-profile-img", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  return response;
};
