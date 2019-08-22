const { query } = require('./connection');
const createUserTable = require('./models/user');
const createJournalEntriesTable = require('./models/journalEntry');

async function createTables() {
  try {
    await query(createUserTable);
    await query(createJournalEntriesTable);
    console.log('CREATED TABLES');
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  query,
  createTables,
};
