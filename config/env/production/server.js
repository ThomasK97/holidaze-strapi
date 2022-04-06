module.exports = ({ env }) => ({
  url: env("https://thomas-holidaze.herokuapp.com/"),
  proxy: true,
  app: { keys: env.array("APP_KEYS", ["hotel-key", "hotel-key2"]) },
});
