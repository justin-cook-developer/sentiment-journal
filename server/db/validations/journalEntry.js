const Joi = require('@hapi/joi');

const journalEntrySchema = Joi.object().keys({
  id: Joi.number().integer(),
  title: Joi.string()
    .min(1)
    .max(100),
  body: Joi.string().min(1),
  sentiment: Joi.number()
    .min(0)
    .max(1),
  user_id: Joi.string().guid({
    version: ['uuidv4', 'uuidv5'],
  }),
});

module.exports = journalEntrySchema;
