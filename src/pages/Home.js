import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import Search from '../components/Search';

function Home() {
  //Just the homepage
  return (
    <div className='Home'>
      <div className='Home__header'>
        <div className='Home__headerLeft'>
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className='Home__headerRight'>
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className='Home__body'>
        <img
          src='https://patrickcoombe.com/wp-content/uploads/2015/09/new-google-logo-2015.png'
          alt='google'
        />
        <div className='Home__inputContainer'>
          {/* the search input */}
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
