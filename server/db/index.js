const dotenv = require('dotenv');
const { query } = require('./connection');
const { createUserTable } = require('./models/user');

dotenv.config()

query(createUserTable)
  .then(() => console.log('created table'))
  .catch(console.error);
