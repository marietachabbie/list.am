const Joi = require('joi');

const schema = Joi.object({
    postId: Joi.string()
        .alphanum()
        .length(24)
        .messages({
            'string.length': 'Announcement ID should consist of 12 to {#limit} letters and numbers',
        })
});

module.exports = schema;
