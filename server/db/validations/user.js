const Joi = require('@hapi/joi');

const userSchema = Joi.object().keys({
  id: Joi.string().guid({
    version: ['uuidv4', 'uuidv5'],
  }),
  first_name: Joi.string()
    .alphanum()
    .min(1)
    .max(49),
  last_name: Joi.string()
    .alphanum()
    .min(1)
    .max(49),
  email: Joi.string().email(),
  password: Joi.string()
    .min(8)
    .max(49),
  created_at: Joi.string().isoDate(),
  updated_at: Joi.string().isoDate(),
});

module.exports = userSchema;
