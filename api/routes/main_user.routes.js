const router = require("./main");
const UserModel = require("../models/UserModel");
const PostModel = require("../models/PostModel");
const { cloudinary } = require("../utils/cloudinary");

const DEFAULT_PROFILE_IMG = process.env.CLOUDINARY_DEFAULT_PROFILE_IMG;

const CLOUDINARY_PROFILE_PICS_PRESET =
  process.env.CLOUDINARY_PROFILE_PICS_PRESET;

router.post("/check-main-user", async (req, res) => {
  try {
    const { id } = req.body;
    const user = await UserModel.findOne({ id }).exec();

    if (user) {
      res.status(200).send({ message: "allowed" });
    } else {
      res.status(500).send({ message: "denied" });
    }
  } catch {
    res.status(500).send({ message: "unexpected error" });
  }
});

router.post("/get-user-data", async (req, res) => {
  try {
    const { id } = req.body;
    const user = await UserModel.findOne({ id }).exec();
    if (user) {
      res.json({
        message: "account exist",
        username: user.username,
        profileImg: user.profileImg,
        following: user.following,
        followers: user.followers,
        posts: user.posts,
      });
    } else {
      res.status(500).send({ message: "denied" });
    }
  } catch {
    res.status(500).send({ message: "unexpected error" });
  }
});

router.post("/get-userpage", async (req, res) => {
  try {
    const { username } = req.body;
    const user = await UserModel.findOne({ username }).exec();
    if (user) {
      res.json({
        status: 200,
        username: user.username,
        profileImg: user.profileImg,
        id: user.id,
        following: user.following,
        followers: user.followers,
        posts: user.posts,
      });
    } else {
      res.status(400).send({ status: 400, message: "no account" });
    }
  } catch {
    res.status(500).send({ status: 500, message: "unexpected error" });
  }
});

router.post("/change-profile-img", async (req, res) => {
  try {
    const { userId, imageFile } = req.body;

    const base64EncodedImage = imageFile.data_url;

    const PUBLIC_ID = userId.slice(0, 13);

    try {
      await cloudinary.uploader.destroy(
        `simple-place/profilePics/${PUBLIC_ID}`,
        {
          invalidate: true,
          resource_type: "image",
        }
      );
    } catch {
      console.log("no such photo stored");
    }

    const uploadedResponse = await cloudinary.uploader.upload(
      base64EncodedImage,
      {
        upload_preset: CLOUDINARY_PROFILE_PICS_PRESET,
        public_id: PUBLIC_ID,
      }
    );

    await UserModel.updateOne(
      {
        id: userId,
      },
      { $set: { profileImg: uploadedResponse.url } }
    );

    await PostModel.updateMany(
      { "comments.commentUserId": userId },
      { $set: { "comments.$[c].profileImg": uploadedResponse.url } },
      { arrayFilters: [{ "c.commentUserId": userId }] }
    );

    res.status(200).json({
      status: 200,
      image: uploadedResponse.url,
    });
  } catch {
    res.status(500).json({ message: "unexpected error" });
  }
});

router.post("/delete-profile-img", async (req, res) => {
  try {
    const { userId } = req.body;

    const PUBLIC_ID = userId.slice(0, 13);

    try {
      await cloudinary.uploader.destroy(
        `simple-place/profilePics/${PUBLIC_ID}`,
        {
          invalidate: true,
          resource_type: "image",
        }
      );
    } catch {
      console.log("no such photo stored");
    }

    await UserModel.updateOne(
      {
        id: userId,
      },
      { $set: { profileImg: DEFAULT_PROFILE_IMG } }
    );

    await PostModel.updateMany(
      { "comments.commentUserId": userId },
      { $set: { "comments.$[c].profileImg": DEFAULT_PROFILE_IMG } },
      { arrayFilters: [{ "c.commentUserId": userId }] }
    );

    res.status(200).json({
      status: 200,
      image: DEFAULT_PROFILE_IMG,
    });
  } catch {
    res.status(500).json({ message: "unexpected error" });
  }
});

router.post("/follow-user", async (req, res) => {
  try {
    const { mainId, userId } = req.body;

    const alreadyFollowed = await UserModel.findOne({
      id: mainId,
      following: { $in: userId },
    });

    if (!alreadyFollowed) {
      await UserModel.updateOne(
        { id: mainId },
        { $push: { following: userId } }
      );
      await UserModel.updateOne(
        { id: userId },
        { $push: { followers: mainId } }
      );
      res.status(200).send({ message: "allowed" });
    } else {
      res.status(400).send({ message: "denied" });
    }
  } catch {
    res.status(500).send({ message: "unexpected error" });
  }
});

router.post("/unfollow-user", async (req, res) => {
  try {
    const { mainId, userId } = req.body;

    await UserModel.updateOne({ id: mainId }, { $pull: { following: userId } });
    await UserModel.updateOne({ id: userId }, { $pull: { followers: mainId } });
    res.status(200).send({ message: "success" });
  } catch {
    res.status(500).send({ message: "unexpected error" });
  }
});

router.post("/delete-user", async (req, res) => {
  try {
    const { mainId, userId } = req.body;
    await UserModel.updateOne({ id: mainId }, { $pull: { followers: userId } });
    await UserModel.updateOne({ id: userId }, { $pull: { following: mainId } });
    res.status(200).send({ message: "success" });
  } catch {
    res.status(500).send({ message: "unexpected error" });
  }
});

router.post("/change-username", async (req, res) => {
  try {
    const { newUsername, userId } = req.body;

    if (newUsername === undefined || userId === undefined) throw new Error();

    const user = await UserModel.findOne({ username: newUsername });

    if (user) {
      res.status(400).send({
        status: 400,
        message: "A user with this login already exists",
      });
    } else {
      await UserModel.updateOne(
        { id: userId },
        { $set: { username: newUsername } }
      );

      await PostModel.updateMany(
        { "comments.commentUserId": userId },
        { $set: { "comments.$[c].username": newUsername } },
        { arrayFilters: [{ "c.commentUserId": userId }] }
      );

      res
        .status(200)
        .send({ status: 200, username: newUsername, message: "success" });
    }
  } catch {
    res.status(500).send({ message: "Something went wrong. Try again" });
  }
});

module.exports = router;
