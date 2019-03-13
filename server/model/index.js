import { createUserTable, dropUserTable } from './user';
import { dropEmailTable, createEmailTable } from './email';
import { dropContactTable, createContactsTable } from './contact';
import { dropInboxTable, createInboxTable } from './inbox';
import { dropSentTable, createSentTable } from './sent';
import { dropDraftTable, createDraftTable } from './draft';
import { dropGroupTable, createGroupTable } from './group';
import { dropMemberTable, createMemberTable } from './groupMemebers';

const createAllTables = () => {
  createUserTable();
  createEmailTable();
  createContactsTable();
  createInboxTable();
  createSentTable();
  createDraftTable();
  createGroupTable();
  createMemberTable();
};

const dropAllTables = () => {
  dropUserTable();
  dropEmailTable();
  dropContactTable();
  dropInboxTable();
  dropSentTable();
  dropDraftTable();
  dropGroupTable();
  dropMemberTable();
};

export {
  createAllTables, dropAllTables,
};
