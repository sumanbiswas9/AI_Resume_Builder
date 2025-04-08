'use strict';

/**
 * chat-bot controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::chat-bot.chat-bot');
