const express = require("express");
const authMiddleware = require("../middlewares/authe");
const upload = require("../config/multer.config");
const router = express.Router();
const fileModel = require("../models/files.models");

router.get("/home", authMiddleware, (req, res) => {
  res.render("home");
});

router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  async (req, res) => {
    const newFile = await fileModel.create({
      path: req.file.path,
      originalname: req.file.originalname,
      user: req.user.userId,
    });

    res.json(newFile);
  }
);

module.exports = router;
