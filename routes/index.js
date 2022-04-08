const router = require("express").Router();
const monsters = require("./monsters");
const habitats = require("./habitats");
const lives = require("./lives");

router.use("/monsters", monsters);
router.use("/habitats", habitats);
router.use("/lives", lives);

module.exports = router;
