const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Cloudinary = require("./cloudinary.config");

const storage = new CloudinaryStorage({
  cloudinary: Cloudinary,
  params: {
    folder: "Data", // Optional: specify a folder in your Cloudinary account
    // format: async (req, file) => "png", // Optional: specify the format (supports promises)
    // public_id: (req, file) => "computed-filename-using-request", // Optional: specify the public ID
    unique: true, // this will create another file for same name
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
