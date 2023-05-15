const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallBack } = require("../helpers/dbHelper");

const router = express.Router();

router.get("/posts", (req, res) => {
  dbConnection.execute(`SELECT * FROM posts`, (err, result) => {
    defaultCallBack(err, result, res);
  });
});

router.post("/posts", (req, res) => {
  const {
    body: { title, description, image },
  } = req;

  dbConnection.execute(
    "INSERT INTO posts (title, description, image) VALUES (?, ?, ?)",
    [title, description, image],
    (err, result) => {
      defaultCallBack(err, result, res);
    }
  );
});

//defaultCallBack funkcija ateina is ../helpers/dbHelper

module.exports = router;
