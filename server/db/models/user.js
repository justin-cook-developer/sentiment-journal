const createUserTable = `
DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users(
  id UUID PRIMARY KEY,
  first_name VARCHAR (50) NOT NULL,
  last_name VARCHAR (50) NOT NULL,
  email VARCHAR (400) UNIQUE NOT NULL,
  password VARCHAR(50) NOT NULL,
  created_at DATE NOT NULL,
  updated_at DATE NOT NULL
);`;

module.exports = {
  createUserTable,
};
