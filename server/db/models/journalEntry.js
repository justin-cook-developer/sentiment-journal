const createJournalEntry = `
DROP TABLE IF EXISTS journal_entries CASCADE;
CREATE TABLE journal_entries(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    body TEXT NOT NULL,
    sentiment NUMERIC(16, 15) NOT NULL CHECK (sentiment >= 0 AND sentiment <= 1),
    user_id UUID REFERENCES users(id)
);`;

module.exports = createJournalEntry;
