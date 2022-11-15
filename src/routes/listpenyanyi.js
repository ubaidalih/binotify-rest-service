const { getPenyanyi } = require("../services/user");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const listPenyanyi = await getPenyanyi();
  return res.json(listPenyanyi);
});

module.exports = router;