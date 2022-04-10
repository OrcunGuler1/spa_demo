import React from "react";

const Reply = ({ content }) => {
  return (
    <div className="reply-container">
      <div className="reply-header">
        <div className="reply-header-left">
          <img
            src={require(`../../images/pictures/${content.content.profile_image}`)}
            alt="user"
            className="reply-user-image"
          />
          <p className="reply-username">{content.content.username}</p>
          <p className="reply-date">{content.content.replyDate}</p>
        </div>
        <div className="reply-header-right">
          <button className="dots-settings" />
        </div>
      </div>
      <div className="reply-content">
        <div className="reply-content-text">
          <p className="mention">@{content.content.username}</p>
          {content.content.replyText}
        </div>
        {content.content.replyImage ? (
          <img
            src={require(`../../images/pictures/${content.content.replyImage}`)}
            alt="thread-content"
            className="content-image"
          />
        ) : null}
      </div>
      <div className="reply-footer">
        <div className="votes-comments">
          <button className="reply">Reply</button>
          <div className="vote-down">
            <button className="vote-down-button">
              <img
                src={require("../../images/icons/arrow-alt-down.svg")}
                alt="down-arrow"
              />
            </button>
            {content.content.replyVotes.down}
          </div>
          <div className="vote-up">
            <button className="vote-up-button">
              <img
                src={require("../../images/icons/arrow-alt-down-1.svg")}
                alt="alt-arrow"
              />
            </button>
            {content.content.replyVotes.up}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reply;
