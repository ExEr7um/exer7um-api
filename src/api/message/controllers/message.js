"use strict";

/**
 *  message controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::message.message", ({ strapi }) => ({
  async create(ctx) {
    const { data, meta } = await super.create(ctx);
    strapi.plugins["email"].services.email.send({
      to: "exer7um@gmail.com",
      from: "exer7um@gmail.com",
      replyTo: data.attributes.email,
      subject: `${data.attributes.name} — ${new Date().toLocaleString("ru-RU", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })}`,
      text: data.attributes.message,
    });
    return { data, meta };
  },
}));
