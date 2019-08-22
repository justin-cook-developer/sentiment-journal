const getEntriesByUserId = `SELECT * FROM journal_entries WHERE user_id = $1`;

const makeEntryWithUserId =
  'INSERT INTO journal_entries (title, body, sentiment, user_id) VALUES ($1, $2, $3, $4)';

const deleteEntryById = `DELETE FROM journal_entries WHERE id = $1`;

const deleteEntriesByUserId = `DELETE FROM journal_entries WHERE user_id = $1`;

module.exports = {
  getEntriesByUserId,
  makeEntryWithUserId,
  deleteEntryById,
  deleteEntriesByUserId,
};
