const router = require("express").Router();

router.use("/listpenyanyi", require("./listpenyanyi"));
router.use("/song", require("./song"));
router.use("/user", require("./user"));

module.exports = router;