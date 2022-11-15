const mysql = require("mysql2/promise");

const createMySqlConnection = async () =>
  await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
  });

module.exports = createMySqlConnection;