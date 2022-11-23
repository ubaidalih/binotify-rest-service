const { getPenyanyi, getPenyanyiById } = require("../services/user");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const listPenyanyi = await getPenyanyi();
  return res.json(listPenyanyi);
});

router.get("/id", async (req, res) => {
  const penyanyi_id = req.query["user_id"];
  const listPenyanyi = await getPenyanyiById(penyanyi_id);
  return res.json(listPenyanyi);
});

module.exports = router;