const router = require("./main");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const { v1: uuidv1 } = require("uuid");

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username }).exec();

    if (user) {
      return res
        .status(400)
        .json({ message: "User with this nickname already exists" });
    }

    const profileImg =
      "https://res.cloudinary.com/drrhht2jy/image/upload/v1647441539/samples/profiles_images/default.jpg";
    const hashPassword = bcrypt.hashSync(password, 10);
    const id = uuidv1();

    await UserModel.create({
      username,
      password: hashPassword,
      id,
      profileImg,
    });

    res.status(200).json({
      message: "allowed",
      id: id,
      profileImg: profileImg,
      following: [],
      followers: [],
      posts: [],
    });
  } catch {
    res.status(500).json({ message: "Unexpected error. Try again" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username }).exec();
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        // if (password === user.password) {
        // if someone forgot password
        return res.status(200).json({
          message: "allowed",
          id: user.id,
          profileImg: user.profileImg,
          following: user.following,
          followers: user.followers,
          posts: user.posts,
        });
      }
      res.status(400).json({ message: "Wrong password. Try again" });
    } else {
      res.status(500).json({
        message: "User with this nickname does not exist",
      });
    }
  } catch {
    res.status(500).send({ message: "Unexpected error. Try again" });
  }
});

module.exports = router;
