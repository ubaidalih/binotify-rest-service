const router = require("express").Router();

router.use("/listpenyanyi", require("./listpenyanyi"));
router.use("/song", require("./song"));
router.use("/user", require("./user"));
router.use("/subscription",require("./subscription"));

module.exports = router;