import React, { createContext, useCallback, useEffect, useState } from "react";
export const SuggestionsContext = createContext();
const SuggestionsProvider = (props) => {
  const [suggestions, setSuggestions] = useState();

  const getSuggestions = useCallback(() => {
    fetch("http://localhost:3000/suggestions")
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    getSuggestions();
  }, [getSuggestions]);
  
  return (
    <SuggestionsContext.Provider
      value={{
        suggestions,
        setSuggestions,
      }}
    >
      {props.children}
    </SuggestionsContext.Provider>
  );
};

export default SuggestionsProvider;
