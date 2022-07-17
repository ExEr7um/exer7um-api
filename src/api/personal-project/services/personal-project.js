'use strict';

/**
 * personal-project service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personal-project.personal-project');
