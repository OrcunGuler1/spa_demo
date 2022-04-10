import React, { useContext } from "react";
import ThreadCard from "./ThreadCard";
import { ThreadContext } from "../../Providers/ThreadProvider";
const Thread = () => {
  const { currentThread, currentThreadIndex } = useContext(ThreadContext);
  console.log(
    currentThread ? currentThread[`data${currentThreadIndex}`] : null
  );
  return (
    <div className="thread-container">
      {currentThread
        ? currentThread[`data${currentThreadIndex}`].map((contents, index) => {
            return <ThreadCard key={index} content={contents} />;
          })
        : null}
      <div className="reply-thread">
        <input type="text" placeholder="Reply to this thread" />
      </div>
    </div>
  );
};

export default Thread;
