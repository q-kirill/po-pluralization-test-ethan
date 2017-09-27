//Returns searched movies as an array of objects
//Sorts movies by rating

import { SEARCH } from '../Actions/index.js';

export default function (state=[], action) {
  switch(action.type) {
    case SEARCH:
      if (!Array.isArray(action.payload.data)) {
        return [action.payload.data]
      } else {
        return action.payload.data.sort((a,b) => {
          return b.rating - a.rating;
        });
      }
  }
  return state;
}