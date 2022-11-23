const createMySQLConnection = require("../db");

const createSong = async (judul, penyanyi_id, audio_path) => {
    const [result] = await createMySQLConnection().then((conn) => {
      return conn.execute("INSERT INTO `song` (`judul`, `penyanyi_id`, `audio_path`) VALUE (?,?,?)", [judul, penyanyi_id, audio_path]);
    });
    return result;
  };

  const readSong = async (penyanyi_id) => {
    const [rows] = await createMySQLConnection().then((conn) => {
      return conn.execute("SELECT `song_id`, `judul`, `audio_path` FROM `song` WHERE `penyanyi_id` = ?", [penyanyi_id]);
    });
    return rows;
  };

  const detailSong = async (song_id) => {
    const [rows] = await createMySQLConnection().then((conn) => {
      return conn.execute("SELECT `judul`, `penyanyi_id`, `audio_path` FROM `song` WHERE `song_id` = ?", [song_id]);
    });
    return rows;
  };

  const deleteSong = async (song_id) => {
    const [result] = await createMySQLConnection().then((conn) => {
      return conn.execute("DELETE FROM `song` WHERE `song_id` = ?", [song_id]);
    });
    return result;
  };

  const updateSong = async (judul, audio_path, song_id) => {
    const [result] = await createMySQLConnection().then((conn) => {
      return conn.execute("UPDATE `song` SET `judul` = ? , `audio_path` = ? WHERE `song_id` = ?", [judul, audio_path, song_id]);
    });
    return result;
  };

module.exports = {createSong, readSong, detailSong, updateSong, deleteSong};