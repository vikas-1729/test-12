/****************IMPORTING PACKAGE*******************************/
const express = require("express");//it will just fetch the existing instance, will not create new instance

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const homeController = require("../controller/home_controller");

router.get("/", homeController.Index);
router.use("/upload", require("./upload.js"));
router.use("/delete", require("./delete"));

/*****************EXPORTING ROUTER*******************************/
module.exports = router;