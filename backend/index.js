const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.options("*", cors());
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

//middleware
const secret = process.env.secret;
const api = process.env.API_URL;
app.use(bodyParser.json());

// Routes
const userRouter = require('./routes/result');
app.use(`/`, userRouter);

//Database
mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "test10Dec2021",
  })
  .then(() => {
    console.log("Database Connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("hello guys i am here! Where you r searching me...");
});

app.listen("3000", () => {
  console.log("server is running http://localhost:3000");
});
