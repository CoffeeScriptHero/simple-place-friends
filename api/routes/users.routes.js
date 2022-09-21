const router = require("./main");
const UserModel = require("../models/UserModel");

router.post("/get-recommended-users", async (req, res, next) => {
  try {
    const { id } = req.body;
    const mainUserFollowingIds = (await UserModel.findOne({ id })).following;
    const notFollowing = await UserModel.find({
      id: { $nin: [...mainUserFollowingIds, id] },
    });
    let suggestedUsers = [];

    if (notFollowing.length > 14) {
      for (let u = 0; u < 14; u++) {
        suggestedUsers.push(notFollowing[u]);
      }
    } else if (notFollowing.length < 5) {
      const users = await UserModel.find({ id: { $ne: id } }).limit(10);
      suggestedUsers = [...users];
    } else {
      suggestedUsers = [...notFollowing];
    }

    res.status(200).json({ message: "allowed", users: suggestedUsers });
  } catch {
    res.status(500).send({ message: "unexpected error" });
  }
});

router.post("/get-followers", async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await UserModel.findOne({ username });

    const followersDataList = await UserModel.find({
      id: { $in: user.followers },
    });

    const followers = followersDataList.map((s) => ({
      username: s.username,
      profileImg: s.profileImg,
      id: s.id,
    }));

    res.status(200).json({ message: "allowed", followers: followers });
  } catch {
    res.status(500).send({ message: "unexpected error" });
  }
});

router.post("/get-following", async (req, res, next) => {
  try {
    const { username } = req.body;
    const user = await UserModel.findOne({ username });

    const followingDataList = await UserModel.find({
      id: { $in: user.following },
    });

    const following = followingDataList.map((s) => ({
      username: s.username,
      profileImg: s.profileImg,
      id: s.id,
    }));

    res.status(200).json({ message: "allowed", following: following });
  } catch {
    res.status(500).send({ message: "unexpected error" });
  }
});

router.post("/get-matched-users", async (req, res, next) => {
  try {
    const { usernameChunk } = req.body;

    let regex;
    try {
      if (usernameChunk.length) {
        regex = usernameChunk === "." ? "/" : new RegExp(usernameChunk, "i");
      } else {
        regex = "/";
      }
    } catch {
      console.log(regex);
    }

    const matchedUsers = await UserModel.find({
      username: { $regex: regex ? regex : "/" },
    });

    const matchedUsersList = matchedUsers.map((u) => ({
      profileImg: u.profileImg,
      username: u.username,
    }));

    res
      .status(200)
      .json({ status: 200, message: "allowed", users: matchedUsersList });
  } catch {
    res.status(500).send({ message: "unexpected error" });
  }
});

module.exports = router;
