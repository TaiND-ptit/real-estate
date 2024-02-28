module.exports = {
  development: {
    username: "postgres",
    password: "Tai!15041998",
    database: "rest",
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
    timezone: "+07:00",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};