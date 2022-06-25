const router = require("express").Router();
const { create_file, get_file } = require("../modules/ApiModule");
const upload = require("../middleWare/multer");

//----------------------------* Post Input File *----------------------------//

router.post("/post", upload.single("file"), create_file);

//----------------------------* Get Output File *----------------------------//

router.get("/get", get_file);

//----------------------------* Exporting Modules *----------------------------//

module.exports = router;
