module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "exer7um-api"),
      user: env("DATABASE_USERNAME", "exer7um"),
      password: env("DATABASE_PASSWORD", "a14Gp3VRT"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
  },
});
