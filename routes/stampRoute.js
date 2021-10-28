const express = require("express");
const router = express.Router();

const { stamp, currentStamp } = require("../controllers/stampCnt");
router.route("/").get(currentStamp);
router.route("/:date?").get(stamp);

module.exports = router;
