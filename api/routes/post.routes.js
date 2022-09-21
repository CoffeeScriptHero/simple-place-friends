const router = require("./main");
const PostModel = require("../models/PostModel");
const UserModel = require("../models/UserModel");
const { v1: uuidv1 } = require("uuid");
const { cloudinary } = require("../utils/cloudinary");

const CLOUDINARY_POSTS_PRESET = process.env.CLOUDINARY_POSTS_PRESET;

router.post("/add-post", async (req, res) => {
  try {
    const { description, userId, imageFile } = req.body;

    const POST_ID = uuidv1().slice(0, 8);
    const base64EncodedImage = imageFile.data_url;

    const uploadedResponse = await cloudinary.uploader.upload(
      base64EncodedImage,
      {
        upload_preset: CLOUDINARY_POSTS_PRESET,
        public_id: POST_ID,
        secure: true,
      }
    );

    await PostModel.create({
      id: POST_ID,
      description: description,
      userId: userId,
      comments: [],
      likes: [],
      image: uploadedResponse.secure_url,
    });

    res.status(200).json({
      message: "allowed",
      id: POST_ID,
      description: description,
      userId: userId,
      comments: [],
      likes: [],
      image: uploadedResponse.secure_url,
    });
  } catch {
    res.status(500).json({ message: "unexpected error" });
  }
});

router.post("/delete-post", async (req, res) => {
  try {
    const { postId } = req.body;

    await PostModel.deleteOne({ id: postId });

    res.status(200).json({ message: "success" });
  } catch {
    res.status(500).json({ message: "unexpected error" });
  }
});

router.post("/get-posts", async (req, res) => {
  try {
    const { from, step } = req.body;

    const totalPostsNumber = await PostModel.count();

    const posts = (await PostModel.find({})).reverse().slice(from, from + step);

    const uniquePosts = [...new Set(posts)];

    res.status(200).json({
      hasMore: from >= totalPostsNumber ? false : true,
      posts: uniquePosts,
    });
  } catch {
    res.status(500).json({ message: "unexpected error" });
  }
});

router.post("/get-user-posts", async (req, res) => {
  const { id } = req.body;
  const posts = await PostModel.find({ userId: id });
  if (posts) {
    res.status(200).json({ message: "allowed", posts });
  } else {
    res.status(400).json({ message: "no posts" });
  }
});

router.post("/get-post", async (req, res) => {
  try {
    const { id } = req.body;
    const post = await PostModel.findOne({ id: id });
    if (post) {
      res.status(200).json({ post });
    } else {
      res.status(400).json({ message: "no posts" });
    }
  } catch {
    res.status(500).json({ message: "error" });
  }
});

router.post("/update-likes", async (req, res) => {
  try {
    const { id, likes, type } = req.body;

    if (id) {
      if (type === "comment") {
        await PostModel.updateOne(
          { "comments.commentId": id },
          { $set: { "comments.$.commentLikes": likes } }
        );
      }

      if (type === "post") {
        await PostModel.updateOne({ id }, { $set: { likes } });
      }

      res.status(200).json({ message: "allowed" });
    } else {
      res.status(400).json({ message: "no post" });
    }
  } catch {
    res.status(500).json({ message: "error" });
  }
});

router.post("/get-liked", async (req, res) => {
  try {
    const { id, type } = req.body;

    if (id) {
      let usersList;

      if (type === "comment") {
        const comments = await PostModel.findOne(
          {
            "comments.commentId": id,
          },
          {
            _id: 0,
            comments: 1,
          }
        );

        const comment = comments.comments.filter((c) => c.commentId === id)[0];

        usersList = await UserModel.find({
          id: { $in: comment.commentLikes },
        });
      }

      if (type === "post") {
        const post = await PostModel.findOne({ id });

        usersList = await UserModel.find({ id: { $in: post.likes } });
      }

      const users = usersList.map((u) => ({
        username: u.username,
        profileImg: u.profileImg,
        id: u.id,
      }));

      res.status(200).json({ message: "allowed", liked: users });
    }
  } catch {
    res.status(500).send({ message: "unexpected error", liked: [] });
  }
});

router.post("/create-comment", async (req, res) => {
  try {
    const { postId, userId, text } = req.body;

    const commentId = uuidv1();

    const user = await UserModel.findOne({ id: userId }).exec();

    if (user) {
      const comment = {
        commentId,
        commentUserId: userId,
        text,
        username: user.username,
        profileImg: user.profileImg,
        commentLikes: [],
      };
      await PostModel.updateOne(
        { id: postId },
        {
          $push: {
            comments: comment,
          },
        }
      );
      const post = await PostModel.findOne({ id: postId }).exec();
      res.status(200).json({ comments: post.comments });
    } else {
      res.sendStatus(400);
    }
  } catch {
    res.sendStatus(500);
  }
});

router.post("/remove-comment", async (req, res) => {
  try {
    const { postId, commentId, comments } = req.body;

    if (postId && commentId && comments) {
      const updatedComments = comments.filter((c) => c.commentId !== commentId);

      await PostModel.updateOne(
        { id: postId },
        { $set: { comments: updatedComments } }
      );

      res.status(200).json({ comments: updatedComments });
    } else {
      res.sendStatus(400);
    }
  } catch {
    res.sendStatus(500);
  }
});

module.exports = router;
