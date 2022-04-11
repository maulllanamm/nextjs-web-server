var express = require("express");
var router = express.Router();
const { viewSignin, actionSign, actionLogout } = require("./controller");

/* GET home page. */
router.get("/", viewSignin);
router.post("/", actionSign);
router.get("/logout", actionLogout);

module.exports = router;
