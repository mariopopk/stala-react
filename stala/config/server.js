// module.exports = ({ env }) => ({
//   host: env("APP_HOST", "0.0.0.0"),
//   port: env.int("NODE_PORT", 1337),
// });

module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "0d7cff94d0ac1ffc6821b1e07b036015"),
    },
  },
});
