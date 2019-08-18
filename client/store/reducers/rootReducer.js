import { combineReducers } from 'redux';
import authReducer from './authReducer';
import sendMessage from './sendMessage';
import inboxReducer from './inbox';
import SentReducer from './sent';
import DraftReducer from './draft';

const rootReducer = combineReducers({
  auth: authReducer,
  sendMessage,
  inboxReducer,
  SentReducer,
  DraftReducer
});

export default rootReducer;
