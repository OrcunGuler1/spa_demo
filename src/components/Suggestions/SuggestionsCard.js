import React from "react";

const SuggestionsCard = ({ data }) => {
  return (
    <div className="card-body">
      <button>
        {data.profile_image ? (
          <img
            src={require(`../../images/pictures/${data.profile_image}`)}
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
        <h4 className="content">
          {data.username}
          <p className="context">{data.entries}</p>
        </h4>
      </button>
    </div>
  );
};

export default SuggestionsCard;
