import React, { useEffect } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import useInputState from '../hooks/useInputState';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../stateReducer';

function Search({ hideButtons = false, value }) {
  const [{}, dispatch] = useStateValue();
  const [input, handleInput, setInput] = useInputState('');
  const History = useHistory();
  useEffect(() => {
    if (value) setInput(value);
  }, []);
  const handleSearch = (evt) => {
    evt.preventDefault();

    dispatch({
      type: actionTypes.setSearchTerm,
      term: input,
    });

    History.push(`/search/${input}`);
  };
  return (
    <form className='Search' onSubmit={handleSearch}>
      <div className='Search__input'>
        <SearchIcon className='Search__inputIcon' />
        <input value={input} onChange={handleInput} />
        <MicIcon />
      </div>
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
