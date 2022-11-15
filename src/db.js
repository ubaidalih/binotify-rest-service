const mysql = require("mysql2/promise");

const createMySqlConnection = async () =>
  await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    database: "binotify-rest",
    password: "dbadmin123",
  });

module.exports = createMySqlConnection;