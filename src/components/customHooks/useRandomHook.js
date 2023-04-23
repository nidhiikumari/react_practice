import { useState, useEffect } from 'react';

function useRandomHook (value) {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
  }, [])

  return suggestions;
}

export default useRandomHook;
