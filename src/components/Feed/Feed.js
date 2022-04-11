import React, { useContext, useState } from "react";
import FeedCard from "./FeedCard";
import { FeedContext } from "../../Providers/FeedProvider";
import { ThreadContext } from "../../Providers/ThreadProvider";
import { DateTime } from "luxon";
const Feed = () => {
  const [selectPopular, setSelectPopular] = useState(true);
  const [selectRecent, setSelectRecent] = useState(false);
  const { feed, setFeed, getFeed } = useContext(FeedContext);
  const { threads, setCurrentThread, setCurrentThreadIndex } =
  useContext(ThreadContext);

  const onPopularClick = () => {
    setSelectPopular(true);
    setSelectRecent(false);
    getFeed()
  };
  const onRecentClick = () => {
    setSelectRecent(true);
    setSelectPopular(false);
    setFeed(
      feed?.sort((obj1, obj2) => {
        return (
          DateTime.fromFormat(obj1?.date, "dd.mm.yyyy") -
          DateTime.fromFormat(obj2?.date, "dd.mm.yyyy")
        );
      })
    );
  };

  return (
    <div className="feed-container">
      <div className="feed-header">
        <button
          className={selectPopular ? "header-link selected" : "header-link"}
          onClick={() => onPopularClick()}
        >
          Popular
        </button>
        <button
          className={!selectRecent ? "header-link" : "header-link selected"}
          onClick={() => onRecentClick()}
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
