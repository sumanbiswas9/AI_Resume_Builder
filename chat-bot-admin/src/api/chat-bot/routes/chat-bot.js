'use strict';

/**
 * chat-bot router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::chat-bot.chat-bot');
