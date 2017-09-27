import axios from 'axios';

//Set constants for 'types' and export for use throughout the app to avoid typos.

export const SEARCH = 'SEARCH';

//Write all action creators

export function fetchSearchResults(searchedTerm, searchType) {
  //Fetch data from Netflix api

  const request = axios.post('/search', {
    searchedTerm: searchedTerm,
    searchType: searchType
  });

  return {
    type: SEARCH,
    payload: request
  }

}