module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "exer7um@gmail.com",
        testAddress: "exer7um@gmail.com",
      },
    },
  },
  // ...
});
