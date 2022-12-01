const {
  createSong,
  readSong,
  detailSong,
  updateSong,
  deleteSong,
} = require("../services/song");
const {
  authenticateUserToken,
  authenticateAdminToken,
} = require("../auth/jwt");
const multer = require("multer");
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    console.log("filename");
    cb(null, file.originalname);
  },
  destination: function (req, file, cb) {
    console.log("storage");
    cb(null, "../public/audio");
  },
});
const uploadAudio = multer({ storage }).single("audio");

const router = require("express").Router();
const soap = require("soap");
const url = "http://localhost:3060/binotify-soap-service/subscription?wsdl";

router.post("/create", authenticateUserToken, uploadAudio, async (req, res) => {
  const judul = req.body.judul;
  const penyanyi_id = req.user_id;
  const audio_path = "http://localhost:3000/audio/" + req.file.filename;
  const result = await createSong(judul, penyanyi_id, audio_path);
  return res.json(result);
});

router.post("/read", async (req, res) => {
  // const penyanyi_id = req.query["user_id"]
  args = {
    arg0: req.body.creator_id,
    arg1: req.body.subscriber_id,
    arg2: process.env.REST_API_KEY,
  };
  if (args.arg1 === -1) {
    const listLagu = await readSong(req.body.creator_id);
    return res.json(listLagu);
  } else {
    soap.createClient(url, {}, function (err, client) {
      client.acceptedRequest(args, function (err, result) {
        flag = result["return"];
        if (flag === true) {
          const listLagu = readSong(req.body.creator_id);
          listLagu.then(function (result) {
            return res.json(result);
          });
        } else {
          return res.json("Your account not subscribe this Artist");
        }
      });
    });
  }
});

router.get("/songdetail", async (req, res) => {
  const song_id = req.query["song_id"];
  const detailLagu = await detailSong(song_id);
  return res.json(detailLagu);
});

router.post("/delete", authenticateUserToken, async (req, res) => {
  const song_id = req.body.song_id;
  const result = await deleteSong(song_id);
  return res.json(result);
});

router.post("/update", authenticateUserToken, uploadAudio, async (req, res) => {
  const judul = req.body.judul;
  const song_id = req.body.song_id;
  const audio_path = "http://localhost:3000/audio/" + req.file.filename;
  const result = await updateSong(judul, audio_path, song_id);
  return res.json(result);
});

module.exports = router;
