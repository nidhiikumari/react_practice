import React, { useCallback, useState } from 'react';
import {
  Input,
  Box
} from '@mui/material';
import '../../App.css';

const Debounce = () => {

  const [suggestions, setSuggestions] = useState("");

  const debounce = (func) => {
    let timer;
    return function (...args) {
      console.log(args, 'args')
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (value) => {
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSuggestions(json.data.items));
  };

  const optimizedFn = useCallback(debounce(handleChange), [])
  return (
    <div>
      <Box className='debounceBox'>
        <Input placeholder="Placeholder" onChange={(e) => optimizedFn(e.target.value)} />
      </Box>
      {suggestions.length > 0 && (
        <div className="autocomplete">
          {suggestions.map((el, i) => (
            <div key={i} className="autocompleteItems">
              <span>{el.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Debounce;