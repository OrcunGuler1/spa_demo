import React, { useState } from "react";
import PropTypes from "prop-types";
import Reply from "./Reply";
const ThreadCard = ({ content }) => {
  const [replyVisible, setReplyVisible] = useState(false);

  return (
    <div className="thread-item">
      <div className="thread-item-header">
        <div className="user-content">
          <button className="user-button">
            {content.profile_image ? (
              <img
                src={require(`../../images/pictures/${content.profile_image}`)}
                alt="profile"
              />
            ) : (
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "grey",
                }}
              />
            )}
            {content.username}
          </button>
          <div className="thread-item-date">{content.content.date}</div>
        </div>
        <button className="dots-settings" />
      </div>
      <div className="thread-item-content">
        <p>{content.content.text}</p>
        {content.hasMoreText ? <button>More...</button> : null}
        {content.image ? (
          <img
            src={require(`../../images/pictures/${content.image}`)}
            alt="thread-content"
            className="content-image"
          />
        ) : null}
      </div>
      <div className="thread-footer">
        <div className="votes-comments">
          <button className="reply">Reply</button>
          <div className="vote-down">
            <button className="vote-down-button">
              <img
                src={require("../../images/icons/arrow-alt-down.svg")}
                alt="down-arrow"
                className={content.selfVotedDown ? "voted" : ""}
              />
            </button>
            {content.votes.down}
          </div>
          <div className="vote-up">
            <button className="vote-up-button">
              <img
                src={require("../../images/icons/arrow-alt-down-1.svg")}
                alt="alt-arrow"
                className={content.selfVotedUp ? "voted" : ""}
              />
            </button>
            {content.votes.up}
          </div>
        </div>
      </div>
      {content.replies.count > 0 ? (
        <>
          <button onClick={() => setReplyVisible(!replyVisible)}>
            <div className="replies">
              <img
                src={require("../../images/icons/reply.svg")}
                alt="reply-icon"
                className="replies-arrow"
              />
              <p className="replies-count">{content.replies.count}</p>
            </div>
          </button>
          {replyVisible && <Reply content={content.replies} />}
        </>
      ) : null}
    </div>
  );
};

ThreadCard.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ThreadCard;
