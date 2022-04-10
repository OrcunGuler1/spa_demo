import React, { useContext } from "react";
import { SuggestionsContext } from "../../Providers/SuggestionsProvider";
import SuggestionsCard from "./SuggestionsCard";

const Suggestions = () => {
  const { suggestions } = useContext(SuggestionsContext);
  return (
    <div className="suggestions-container">
      <div className="suggestions-header">
        <h4 className="header-text">Popular Users</h4>
      </div>
      <div className="suggestions-body">
        {suggestions?.map((suggestion, index) => (
          <SuggestionsCard data={suggestion} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
