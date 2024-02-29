import { combineReducers } from 'redux';
import authorReducer from './slices/author/author';

const rootReducer = (otherReducers = {}) =>
  combineReducers({
    ...otherReducers,
    author: authorReducer,
  });

export { rootReducer };
