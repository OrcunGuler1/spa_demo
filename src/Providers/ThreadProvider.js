import React, { createContext, useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
export const ThreadContext = createContext();

const ThreadProvider = (props) => {
  const [threads, setThreads] = useState();
  const [currentThread, setCurrentThread] = useState();
  const [currentThreadIndex, setCurrentThreadIndex] = useState(0);
  const getThreads = useCallback(() => {
    fetch("http://localhost:3000/threads")
      .then((res) => res.json())
      .then((data) => {
        setThreads([...data]);
        setCurrentThread([...data][0]);
        setCurrentThreadIndex(0);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getThreads();
  }, [getThreads]);
  return (
    <ThreadContext.Provider
      value={{
        threads,
        setThreads,
        currentThread,
        setCurrentThread,
        currentThreadIndex,
        setCurrentThreadIndex,
      }}
    >
      {props.children}
    </ThreadContext.Provider>
  );
};

ThreadProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThreadProvider;
