import { connect } from 'react-redux';
import React from 'react';

import MovieCard from '../Components/MovieCard.js';

//Renders search results from Netflix
//Error handling not elegant here -- in production environment, I would use status codes. 
  //But error handling from external API calls is always tricky in Redux :)

//Next steps: set up other ways to sort data (by runtime, year, etc) -- if I had another 30-45 min!

//Stateless React Component
//Redux Container -- DOES need to know about app-level state

const SearchResults = (props) => {
  if (!props.searchResults.length) {
    return <h1> Search for an actor, director, or movie to see your results. </h1>
  }
  else if (props.searchResults[0] === 'No results found') {
    return <h1> No results found </h1>
  }
  return (
    <div>
      {props.searchResults.map(movieObject => {
        return <MovieCard movie={movieObject} key={movieObject.show_id} />
      })}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults
  }
}

export default connect(mapStateToProps)(SearchResults);