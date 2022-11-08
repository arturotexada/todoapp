// es para gestionar la conexón a la base de datos
// sequelize init --> config

const { Sequelize } = require("sequelize");

// const db = new Sequelize({
//   database: "todo",
//   username: "postgres",
//   host: "localhost",
//   port: "5433",
//   password: "root",
//   dialect: "postgres",
// });

const db = new Sequelize({
  database: process.env.DB_NAME || "todo",
  username: process.env.DB_USER || "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5433,
  password: process.env.DB_PASSWORD || "12345678",
  dialect: "postgres",
});

module.exports = db;
