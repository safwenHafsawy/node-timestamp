const express = require("express");
const router = express.Router();

const stampCtn = require("../controllers/stampCnt");

router.route("/:date?").get(stampCtn);

module.exports = router;
