import React, { useEffect } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import useInputState from '../hooks/useInputState';
import { useHistory } from 'react-router-dom';

//We reuse the search component,      value came from the url parameters
function Search({ hideButtons = false, value }) {
  //custom input hook
  const [input, handleInput] = useInputState(value);
  //react router history hook
  const History = useHistory();
  //function to call when searching
  const handleSearch = (evt) => {
    //prevent page refresh
    evt.preventDefault();
    //redirects to /search/ input
    History.push(`/search/${input}`);
  };

  return (
    <form className='Search' onSubmit={handleSearch}>
      <div className='Search__input'>
        <SearchIcon className='Search__inputIcon' />
        <input value={input} onChange={handleInput} />
        <MicIcon />
      </div>
      {/* hides these buttons if hideButtons = true is passed */}
      {!hideButtons && (
        <div className='Search__buttons'>
          <Button type='submit' variant='outlined'>
            Google Search
          </Button>
          <Button variant='outlined'>I'm feeling lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
