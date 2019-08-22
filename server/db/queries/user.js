const getUserByEmail = `SELECT DISTINCT FROM users WHERE email = $1 LIMIT 1`;

const createUser = `INSERT INTO users(id, firstName, lastName, email, password, created_at, updated_at)
VALUES($1, $2, $3, $4, $5, $6, $7);
`;

// delete a user and delete all posts associated with that user
// const deleteUserById =

module.exports = {
  getUserByEmail,
  createUser,
};
