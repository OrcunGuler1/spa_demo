import React from "react";

const FeedCard = ({
  data,
  thread,
  setCurrentThread,
  setCurrentThreadIndex,
  index,
}) => {
  return (
    <div className="feed-item">
      <button
        onClick={() => {
          setCurrentThread(thread);
          setCurrentThreadIndex(index);
        }}
      >
        <p className="feed-content">{data.content}</p>
      </button>
      <button className="dots-settings"></button>
      <div className="feed-footer">
        <div className="votes-comments">
          <div className="vote-down">
            <button className="vote-down-button">
              <img
                src={require("../../images/icons/arrow-alt-down.svg")}
                alt="down-arrow"
              />
            </button>
            {data.voteDownCount}
          </div>
          <div className="vote-up">
            <button className="vote-up-button">
              <img
                src={require("../../images/icons/arrow-alt-down-1.svg")}
                alt="alt-arrow"
              />
            </button>
            {data.voteUpCount}
          </div>
          <div className="comments">
            <button className="comment-button">
              <img
                src={require("../../images/icons/comment-alt-dots.svg")}
                alt="comment-bubble"
              />
            </button>
            {data.commentCount}
          </div>
        </div>
        <div className="feed-date">{data.date}</div>
      </div>
    </div>
  );
};

export default FeedCard;
