/* eslint-disable import/prefer-default-export */
import { Pool } from 'pg';
import moment from 'moment';
import query from '../db/index';

let connectionString;
/* istanbul ignore next */
if (process.env.NODE_ENV === 'test') {
/* istanbul ignore next */
  connectionString = process.env.TEST_DB;
} else {
  connectionString = process.env.DEV_DB;
}

const pool = new Pool({ connectionString });

pool.connect();

class Email {
  static async createMessage({
    subject, message, status,
  }) {
    const dbQuery = `INSERT INTO
      emails(subject, message, status, createdat)
      VALUES($1, $2, $3, $4)
      returning *`;
    const values = [
      subject,
      message,
      status,
      moment(new Date()),
    ];

    try {
      const { rows } = await query(dbQuery, values);
      return {
        success: true,
        data: { ...rows[0] },
      };
    } catch (error) {
      return {
        success: false,
        error: [error],
      };
    }
  }

  /* istanbul ignore next */
  static async createEmailTable() {
    /* istanbul ignore next */
    const queryText = `CREATE TABLE IF NOT EXISTS
      emails(
        id SERIAL NOT NULL UNIQUE PRIMARY KEY,
        subject VARCHAR(128),
        message TEXT,
        parentMessageId INTEGER,
        status VARCHAR(128),
        createdAt TIMESTAMP
      )`;
    await pool
      .query(queryText)
      /* istanbul ignore next */
      .then(() => {
        pool.end();
      })
      .catch(() => {
        /* istanbul ignore next */
        pool.end();
      });
  }

  /* istanbul ignore next */
  static async dropEmailTable() {
    /* istanbul ignore next */
    const queryText = 'DROP TABLE IF EXISTS emails CASCADE';
    /* istanbul ignore next */
    await pool
      .query(queryText)
      /* istanbul ignore next */
      .then(() => {
        /* istanbul ignore next */
        pool.end();
      })
      /* istanbul ignore next */
      .catch(() => {
        /* istanbul ignore next */
        pool.end();
      });
  }

  static async getMessageReceiverId(email) {
    const findQuery = 'SELECT * FROM users WHERE email=$1 ';

    try {
      const { rows } = await query(findQuery, [email]);
      if (!rows[0]) {
        return {
          success: false,
          error: ['user not found try another email'],
        };
      }
      const { id } = rows[0];
      return {
        success: true,
        id,
      };
    } catch (error) {
      return {
        success: false,
        error: [error],
      };
    }
  }

  static qry(field, table) {
    const dbQuery = `SELECT emails.id as id,  emails.subject as subject, emails.message as message, emails.parentmessageid as parentMessageId,
    emails.status as status, ${table}.receiverid as receiverId, ${table}.senderid as senderId, ${table}.read as read, ${table}.createdat as createdOn
    FROM ${table}
    INNER JOIN emails ON ${table}.messageid = emails.id  WHERE ${table}.${field} = $1;
     `;
    return dbQuery;
  }

  static async queryToRun(userId, field, table) {
    const dbQuery = this.qry(field, table);
    try {
      const { rows } = await query(dbQuery, [userId]);
      if (!rows[0]) {
        return {
          success: true,
          data: [{
            message: 'You don\'t have any messages yet',
          }],
        };
      }
      const data = rows;
      return {
        success: true,
        data: [data],
      };
    } catch (error) {
      return {
        success: false,
        error: [error],
      };
    }
  }

  static async getInboxMessages(userId) {
    return this.queryToRun(userId, 'receiverid', 'inboxs');
  }

  static async getSentEmails(userId) {
    return this.queryToRun(userId, 'senderid', 'sents');
  }

  static async deleteInboxMessage({ userId, id }) {
    const dbQuery = 'DELETE FROM inboxs WHERE id=$1 AND receiverid=$2 returning *';

    try {
      const { rows } = await query(dbQuery, [id, userId]);
      if (!rows[0]) {
        return {
          success: true,
          data: [{
            message: 'inbox not found',
          }],
        };
      }
      return {
        success: true,
        data: [{
          message: 'deleted successfully',
        }],
      };
    } catch (error) {
      return {
        success: false,
        error: [error],
      };
    }
  }
}

export { Email };
