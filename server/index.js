const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbconnect");
// const initRoutes = require("./routes");
// const cookieParser = require("cookie-parser");

require("dotenv").config();
const post = process.env.PORT || 8888;

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnect();
// initRoutes(app);
app.listen(post, () => {
  console.log("server running");
});
