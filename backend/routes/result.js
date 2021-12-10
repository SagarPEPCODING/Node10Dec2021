const { Result } = require("../models/result");
const express = require("express");
const router = express.Router();
require("dotenv/config");
const mongoose = require("mongoose");

router.post("/", async (req, res) => {
  console.log("hello");
  let result = new Result({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
    result: req.body.result,
    rollNo: req.body.rollNo,
  });
  console.log(result);
  resultis = await result.save();
  if (!resultis) {
    return res.status(400).send("the user cannot be created!");
  } else {
    res.send(result);
    console.log("work done");
  }
});

router.get("/api/result/:id", async (req, res) => {
  console.log(req.params.id);
  let results = await Result.findById(req.params.id);
  if (!results) {
    return res.status(400).send("something wrong");
  } else {
    res.send(results);
  }
});

router.get("/", async (req, res) => {
  let results = await Result.find(req.params.id);
  if (!results) {
    return res.status(400).send("something wrong");
  } else {
    res.send(results);
  }
});

module.exports = router;
