import React from 'react';

import SearchResults from '../Containers/SearchResults.js';
import SearchBar from '../Containers/SearchBar.js';

import AppBar from 'material-ui/AppBar';

//renders top menu, search bar form, and movie table

//Stateless React Component
//NOT Redux container (doesn't need to know App level state)


const App = () => {
  return (
    <div> 
      <AppBar title='Netflix Search' iconElementLeft={<div></div>} /> {/* Only way to overwrite native icon of component library */}
      <SearchBar />
      <SearchResults />
    </div>
  )
}

export default App;

