require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3080;

const registrationRoutes = require("./routes/registration.routes");
const mainUserRoutes = require("./routes/main_user.routes");
const usersRoutes = require("./routes/users.routes");
const postRoutes = require("./routes/post.routes");
const gamesRoutes = require("./routes/games.routes");
const URI = process.env.MONGO_CONNECTION_URL;

mongoose
  .connect(URI)
  .then(() => console.log("Database was connected"))
  .catch((err) => console.error(err));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + "/public")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "/public", "/index.html"));
});

app.use("/api/registration", registrationRoutes);
app.use("/api/main_user", mainUserRoutes);
app.use("/api/post", postRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/games", gamesRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on the PORT::${PORT}`);
});
