module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4fd284cc91ed54a5651ceb458408d7c0'),
  },
});
