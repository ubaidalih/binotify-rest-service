const {createSong, readSong, detailSong, updateSong, deleteSong} = require("../services/song");
const multer = require('multer')
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
      console.log('filename')
      cb(null, file.originalname)
    },
    destination: function (req, file, cb) {
      console.log('storage')
      cb(null, '../public/audio')
    },
  })
const uploadAudio = multer({ storage }).single('audio')

const router = require("express").Router();

router.post("/create", uploadAudio, async (req, res) => {
    const judul = req.body.judul;
    const penyanyi_id = req.body.penyanyi_id;
    const audio_path = req.file.path;
    const result = await createSong(judul, penyanyi_id, audio_path);
    return res.json(result);
});

router.get("/read", async (req, res) => {
    const penyanyi_id = req.query["penyanyi_id"];
    const listLagu = await readSong(penyanyi_id);
    return res.json(listLagu);
});

router.get("/songdetail", async (req, res) => {
    const song_id = req.query["song_id"];
    const detailLagu = await detailSong(song_id);
    return res.json(detailLagu);
});

router.post("/delete", async (req, res) => {
    const song_id = req.body.song_id;
    console.log(song_id);
    const result = await deleteSong(song_id);
    return res.json(result);
});

router.post("/update", uploadAudio, async (req, res) => {
    const judul = req.body.judul;
    const song_id = req.body.song_id;
    const audio_path = req.file.path;
    const result = await updateSong(judul, audio_path, song_id);
    return res.json(result);
});

module.exports = router;