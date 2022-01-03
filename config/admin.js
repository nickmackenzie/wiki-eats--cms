module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '480d7deee2663ade7ff86f47f944590b'),
  },
});
