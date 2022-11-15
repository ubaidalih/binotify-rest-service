const router = require("express").Router();

router.use("/listpenyanyi", require("./listpenyanyi"));
router.use("/song", require("./song"));

module.exports = router;