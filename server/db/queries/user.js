const createUser = `INSERT INTO users(id, firstName, lastName, email, password, created_at, updated_at)
VALUES($1, $2, $3, $4, $5, $6, $7);
`;
module.exports = {
  createUser,
};
