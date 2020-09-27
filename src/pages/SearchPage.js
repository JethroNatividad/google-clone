import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.css';
import response from '../response';
import Search from '../components/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const params = useParams();
  // const { data } = useGoogleSearch(term);
  const { data } = useGoogleSearch(params.id);
  //mock api
  // const data = response;
  return (
    <div className='SearchPage'>
      <div className='SearchPage__header'>
        <Link to='/'>
          <img
            src='https://patrickcoombe.com/wp-content/uploads/2015/09/new-google-logo-2015.png'
            alt='google'
          />
        </Link>
        <div className='SearchPage__headerBody'>
          <Search hideButtons value={params.id} />
          <div className='SearchPage__options'>
            <div className='SearchPage__optionsLeft'>
              <div className='SearchPage__option'>
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className='SearchPage__option'>
                <DescriptionIcon />
                <Link to='/news'>News</Link>
              </div>
              <div className='SearchPage__option'>
                <ImageIcon />
                <Link to='/images'>Images</Link>
              </div>
              <div className='SearchPage__option'>
                <LocalOfferIcon />
                <Link to='/shopping'>Shopping</Link>
              </div>
              <div className='SearchPage__option'>
                <RoomIcon />
                <Link to='/maps'>Maps</Link>
              </div>
              <div className='SearchPage__option'>
                <MoreVertIcon />
                <Link to='/more'>More</Link>
              </div>
            </div>
            <div className='SearchPage__optionsRight'>
              <div className='SearchPage__option'>
                <Link to='/settings'>Settings</Link>
              </div>
              <div className='SearchPage__option'>
                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className='SearchPage__results'>
          <div className='SearchPage__resultsCount'>
            About {data?.searchInformation?.formattedTotalResults} results (
            {data?.searchInformation?.formattedSearchTime} seconds) for {term}
          </div>
          {data?.items?.map((item) => (
            <div className='SearchPage__result'>
              {item.pagemap?.cse_image?.length > 0 &&
                item.pagemap?.cse_image[0]?.src && (
                  <img
                    className='SearchPage__resultImage'
                    src={item.pagemap?.cse_image[0]?.src}
                    alt=''
                  />
                )}
              <a href={item.link}>{item.displayLink}</a>

              <a className='SearchPage__resultTitle' href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className='SearchPage__resultSnippet'>{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
