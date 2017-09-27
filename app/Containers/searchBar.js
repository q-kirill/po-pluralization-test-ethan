import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import SearchDropdown from '../Components/SearchDropdown.js';
import { SELECT, MOVIE, ACTOR, DIRECTOR } from '../Components/SearchDropdown.js';

import { fetchSearchResults } from '../Actions/index.js';


//Controlled component passes search term to Redux

//Stateful React Component
  //Collects searchTerm and searchType from form and passes to Redux for API call
//Redux Container -- Doesn't need to know app-level state, but DOES need access to action creator

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      searchType: SELECT
    }

    this.handleSearchText = this.handleSearchText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  handleDropdownChange(event, index, searchType) {
    this.setState({searchType});
  }

  handleSearchText(e) {
    this.setState({searchTerm: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.searchType === SELECT) {
      alert('Please select a search type (Actor, Director, or Movie)')
    } else {
      this.props.fetchSearchResults(this.state.searchTerm, this.state.searchType);
      this.setState({searchTerm: ''});
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{paddingTop: '10px'}}>
        <SearchDropdown handleDropdownChange={this.handleDropdownChange} searchType={this.state.searchType} />
        <TextField
          id="text-field-controlled"
          value={this.state.searchTerm}
          onChange={this.handleSearchText}
          style={{top:'-17px'}}
          floatingLabelText='Search for actor / director / movie'
        />
        <RaisedButton label='SUBMIT' style={{margin: '12px', top:'-22px', position: 'relative'}} onClick={this.handleSubmit} />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchSearchResults}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);