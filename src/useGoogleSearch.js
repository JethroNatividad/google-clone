import { useState, useEffect } from 'react';
import { API_KEY, SE_ID } from './keys';
const useGoogleSearch = (term) => {
  const [data, setData] = useState('');
  useEffect(() => {
    async function fetchData() {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SE_ID}&q=${term}`
      ).then((response) =>
        response.json().then((result) => {
          setData(result);
        })
      );
    }
    fetchData();
  }, [term]);
  return { data };
};

export default useGoogleSearch;
