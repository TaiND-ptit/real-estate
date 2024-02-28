const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("rest", "postgres", "Tai!15041998", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  timezone: '+07:00'
});

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("db success");
  } catch (error) {
    console.error("db fail", error);
  }
};
module.exports = dbConnect;
