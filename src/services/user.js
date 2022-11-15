const createMySQLConnection = require("../db");

const getPenyanyi = async () => {
    const [rows] = await createMySQLConnection().then((conn) => {
      return conn.execute("SELECT `user_id`, `name` FROM `user` WHERE `isAdmin` = 0");
    });
    return rows;
  };

module.exports = {getPenyanyi};