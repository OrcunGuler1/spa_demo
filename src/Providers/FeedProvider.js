import React, { createContext, useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const FeedContext = createContext();
const FeedProvider = (props) => {
  const [feed, setFeed] = useState();
  const getFeed = useCallback(() => {
    fetch("http://localhost:3000/feed")
      .then((res) => res.json())
      .then((data) => {
        setFeed(data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    getFeed();
  }, [getFeed]);
  return (
    <FeedContext.Provider value={{ feed, setFeed }}>
      {props.children}
    </FeedContext.Provider>
  );
};

//validate props
FeedProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FeedProvider;
