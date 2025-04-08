'use strict';

/**
 * chat-bot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chat-bot.chat-bot');
