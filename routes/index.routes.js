const express = require("express");
const authMiddleware = require("../middlewares/authe");
const cloudinary = require("../config/cloudinary.config");
const upload = require("../config/multer.config");
const router = express.Router();
const fileModel = require("../models/files.models");
const file = require("../models/files.models");

router.get("/home", authMiddleware, async (req, res) => {
  const userFiles = await fileModel.find({
    user: req.user.userId,
  });

  // // console.log(userFiles);

  res.render("home", {
    files: userFiles,
  });
});

router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  async (req, res) => {
    const newFile = await fileModel.create({
      path: req.file.path,
      originalName: req.file.originalname,
      user: req.user.userId,
    });
    res.json(newFile);
  }
);

router.get("/download/:path", authMiddleware, async (req, res) => {
  const loggedInUserId = req.user.userId;

  const path = req.params.path;

  // Find the file in the database for the logged-in user
  const fileDoc = await fileModel.findOne({
    user: loggedInUserId,
    path: path,
  });

  if (!fileDoc) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  // Serve the file for download
  res.download(fileDoc.path, fileDoc.originalName, (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      return res.status(500).json({
        message: "Error downloading the file",
      });
    }
  });
});

module.exports = router;
