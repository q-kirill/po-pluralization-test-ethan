import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

//Export values as constants to avoid typos
export const SELECT = 'SELECT';
export const MOVIE = 'title';
export const ACTOR = 'actor';
export const DIRECTOR = 'director';

//Use MaterialUI's Dropdown Menu to render search types. 
  //Controlled form -- state handled in parent Component (searchBar)

//Stateless React Component
//NOT Redux container (doesn't need to know App level state)

const SearchDropdown = (props) => {
  return (
    <DropDownMenu placeholder='Select search type' value={props.searchType} onChange={props.handleDropdownChange}>
      <MenuItem value={SELECT} primaryText="(SELECT SEARCH TYPE)" />
      <MenuItem value={MOVIE} primaryText="Movie" />
      <MenuItem value={ACTOR} primaryText="Actor" />
      <MenuItem value={DIRECTOR} primaryText="Director" />
    </DropDownMenu>
  );
}

export default SearchDropdown;