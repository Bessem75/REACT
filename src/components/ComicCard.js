import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComicCard = ({ data, addFav, heart, cross, handleRemoveFav }) => {
  const url = data.thumbnail.path + "." + data.thumbnail.extension;

  return (
    <div style={{ position: "relative" }}>
      {heart ? (
        <div onClick={() => addFav(data.id)} className="heart-icon-comics">
          <FontAwesomeIcon icon={["far", "heart"]} />
        </div>
      ) : cross ? (
        <div
          onClick={() => handleRemoveFav(data.id)}
          className="cross-icon-comic-card"
        >
          <FontAwesomeIcon icon="times" />
        </div>
      ) : null}
      <div className="comic-card">
        <img alt="comics" src={url} />
        <div>
          <span>{data.title}</span>
          <p>{data.description && data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ComicCard; 
