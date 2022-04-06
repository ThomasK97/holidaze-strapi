module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '73d485bfa5033338fa53810237fc7f77'),
  },
});
