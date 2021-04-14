const Joi = require('joi');

const schema = Joi.object({
    postId: Joi.string()
        .alphanum()
        .length(12)
        .messages({
            'string.length': 'Announcement ID should consist of exactly {#limit} letters and numbers',
        })
});

module.exports = schema;
