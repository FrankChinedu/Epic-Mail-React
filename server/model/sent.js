import { Pool } from 'pg';

let connectionString;

if (process.env.NODE_ENV === 'test') {
  connectionString = process.env.TEST_DB;
} else {
  connectionString = process.env.DEV_DB;
}

const pool = new Pool({ connectionString });

pool.connect();

const createSentTable = async () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
      sents(
        id SERIAL NOT NULL UNIQUE,
        receiverId INTEGER,
        senderId INTEGER,
        messageId INTEGER,
        read BOOLEAN,
        createdAt TIMESTAMP,
        updatedAt TIMESTAMP,
        FOREIGN KEY (receiverId) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (senderId) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (messageId) REFERENCES emails (id) ON DELETE CASCADE
      )`;
  await pool
    .query(queryText)
    .then(() => {
      pool.end();
    })
    .catch(() => {
      pool.end();
    });
};

const dropSentTable = () => {
  const queryText = 'DROP TABLE IF EXISTS sents CASCADE';
  pool
    .query(queryText)
    .then(() => {
      pool.end();
    })
    .catch(() => {
      pool.end();
    });
};

export { dropSentTable, createSentTable };
