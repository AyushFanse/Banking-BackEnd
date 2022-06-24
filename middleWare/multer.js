const multer = require("multer");
const path = require("path");

// Multer config
module.exports = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "Put-Input-File");
    },
    filename: function (req, file, cb) {
      var ext = file.originalname.substr(file.originalname.lastIndexOf("."));
      cb(null, `Input-${Date.now()}${ext}`);
    },
  }),

  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".csv" && ext !== ".text") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
