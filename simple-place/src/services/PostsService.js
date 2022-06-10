export const getAllPosts = async () => {
  const response = await fetch("/api/post/get-all-posts");
  return response;
};

export const getPosts = async (from, step) => {
  const response = await fetch("/api/post/get-posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ from, step }),
  });
  return response;
};

export const getUserPosts = async (id) => {
  const response = await fetch("/api/post/get-user-posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  return response;
};

export const getPost = async (id) => {
  const response = await fetch("/api/post/get-post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: id }),
  });
  return response;
};

export const createComment = async (postId, userId, text) => {
  const response = await fetch("/api/post/create-comment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, userId, text }),
  });
  return response;
};

export const updateLikes = async (id, likes, type) => {
  await fetch("/api/post/update-likes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, likes, type }),
  });
};

export const removeComment = async (postId, commentId, comments) => {
  const response = await fetch("/api/post/remove-comment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId, commentId, comments }),
  });
  return response;
};

export const createPost = async (data) => {
  const response = await fetch("/api/post/add-post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return response;
};

export const deletePost = async (postId) => {
  const response = await fetch("/api/post/delete-post", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ postId }),
  });
  return response;
};

export const likeHandler = (
  setIsFilled,
  isFilled,
  setLikesArr,
  likes,
  postId,
  mainUserId
) => {
  setIsFilled((prevState) => !prevState);
  if (!isFilled) {
    likes.push(mainUserId);
  } else {
    const userIndex = likes.indexOf(mainUserId);
    likes.splice(userIndex, userIndex + 1);
  }
  setLikesArr(likes);
  updateLikes(postId, likes, "post");
};
