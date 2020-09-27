import { useState, useEffect } from 'react';
import { API_KEY, SE_ID } from './keys';

const useGoogleSearch = (term) => {
  //data state
  const [data, setData] = useState('');
  //runs everytime term changes
  useEffect(() => {
    async function fetchData() {
      //fetches data from the api with the term passed
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SE_ID}&q=${term}`
      ).then((response) =>
        //parses the response into json
        response.json().then((result) => {
          //sets the results to the data state
          setData(result);
        })
      );
    }
    //runs the fetchData function
    fetchData();
    //listens when term changes and runs this useEffect
  }, [term]);
  //returns the data
  return { data };
};

export default useGoogleSearch;
