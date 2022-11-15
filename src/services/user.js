const createMySQLConnection = require("../db");

const getPenyanyi = async () => {
    const [rows] = await createMySQLConnection().then((conn) => {
      return conn.execute("SELECT `user_id`, `name` FROM `user` WHERE `isAdmin` = 0");
    });
    return rows;
  };

  const login = async (email) => {
    const [rows] = await createMySQLConnection().then((conn) => {
        return conn.execute("SELECT `user_id`, `password`, `name`, `isAdmin` FROM `user` WHERE `email` = ?", [email]);
    });
    return rows;
};

const register = async (email, password, username, name) => {
    const [result] = await createMySQLConnection().then((conn) => {
        return conn.execute("INSERT INTO `user` (`email`, `password`, `username`, `name`, `isAdmin`) VALUE (?,?,?,?,?)", [email, password, username, name, 0]);
    });
    if(result.affectedRows === 1) {
        const [rows] = await createMySQLConnection().then((conn) => {
            return conn.execute("SELECT `user_id`, `name`, `isAdmin` FROM `user` WHERE `email` = ?", [email]);
        });
        return rows;
    }
    return result;
};

const checkRegister = async (email, username) => {
    const [rows] = await createMySQLConnection().then((conn) => {
        return conn.execute("SELECT `email`, `username` FROM `user` WHERE `email` = ? OR `username` = ?", [email, username]);
    });
    if(rows.length === 0) {
        return false;
    }
    return true;
};


module.exports = {getPenyanyi, login, register, checkRegister};