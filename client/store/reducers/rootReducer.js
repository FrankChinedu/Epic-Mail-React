import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  lep: { some: 'noe' }
});

export default rootReducer;
