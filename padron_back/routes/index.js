var express = require("express");
var router = express.Router();
const apiController = require("../controller/apiController");
const mainController = require("../controller/mainController");

/* GET home page. */
router.get("/", mainController.index);
router.post("/search", mainController.search);
router.post("/api", apiController.search);
router.get("/api/ejemplares", apiController.ejemplares);

module.exports = router;
