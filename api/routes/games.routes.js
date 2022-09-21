const router = require("./main");
const GameModel = require("../models/GameModel");

router.post("/get-games", async (req, res) => {
  try {
    const { category } = req.body;
    const games = await GameModel.find(
      category === "all" ? {} : { categories: { $in: category } }
    );

    res.status(200).json({ message: "success", games });
  } catch {
    res.status(500).json({ message: "denied" });
  }
});

router.post("/get-game-info", async (req, res) => {
  try {
    const { name } = req.body;
    const game = await GameModel.findOne({ name });

    res.status(200).json({ message: "success", game });
  } catch {
    res.status(500).json({ message: "denied" });
  }
});

module.exports = router;
