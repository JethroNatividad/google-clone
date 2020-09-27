import { useState } from 'react';
export default (initialVal) => {
  const [state, setState] = useState(initialVal);
  const handleChange = (evt) => {
    setState(evt.target.value);
  };
  return [state, handleChange, setState];
};
