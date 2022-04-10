import React, { useContext, useState } from "react";
import FeedCard from "./FeedCard";
import { FeedContext } from "../../Providers/FeedProvider";
import { ThreadContext } from "../../Providers/ThreadProvider";
const Feed = () => {
  const [selectPopular, setSelectPopular] = useState(true);
  const { feed } = useContext(FeedContext);
  const { threads, currentThread, setCurrentThread, setCurrentThreadIndex } =
    useContext(ThreadContext);
  return (
    <div className="feed-container">
      <div className="feed-header">
        <button
          className={selectPopular ? "header-link selected" : "header-link"}
          onClick={() => setSelectPopular(true)}
        >
          Popular
        </button>
        <button
          className={selectPopular ? "header-link" : "header-link selected"}
          onClick={() => setSelectPopular(false)}
        >
          Recents
        </button>
      </div>
      <div className="feed-body">
        {feed?.map((feed, index) => (
          <FeedCard
            key={index}
            index={index}
            data={feed}
            thread={threads ? threads[index] : null}
            setCurrentThread={setCurrentThread}
            setCurrentThreadIndex={setCurrentThreadIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
