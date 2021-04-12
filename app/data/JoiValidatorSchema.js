const Joi = require('joi');

const schema = Joi.object({
    postId: Joi.string()
        .alphanum()
        .min(12)
        .max(12)
        .messages({
            'string.min': 'Announcement ID should consist of exactly {#limit} letters and numbers',
            'string.max': 'Announcement ID should consist of exactly {#limit} letters and numbers',
        })
});

module.exports = schema;
