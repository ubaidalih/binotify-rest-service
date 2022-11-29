const { getPenyanyi, getPenyanyiById } = require("../services/user");
const redis = require("redis");

let redisClient;

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

async function cacheData(req, res, next) {
    try {
      const cacheResults = await redisClient.get("cachedListPenyanyi");
      if (cacheResults) {
        const results = JSON.parse(cacheResults);
        return res.json(results);
      } else {
        next();
      }
    } catch (error) {
      console.error(error);
      res.status(404);
    }
  }

const router = require("express").Router();

router.get("/", cacheData, async (req, res) => {
  const listPenyanyi = await getPenyanyi();
  await redisClient.set("cachedListPenyanyi", JSON.stringify(listPenyanyi), {
    EX: 120,
    NX: true,
  });
  return res.json(listPenyanyi);
});

router.get("/id", async (req, res) => {
  const penyanyi_id = req.query["user_id"];
  const listPenyanyi = await getPenyanyiById(penyanyi_id);
  return res.json(listPenyanyi);
});

module.exports = router;