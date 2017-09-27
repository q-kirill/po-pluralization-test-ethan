import { combineReducers } from 'redux';

import searchResults from './searchResultsReducer.js';

const rootReducer = combineReducers({
  searchResults: searchResults,
});

export default rootReducer;
