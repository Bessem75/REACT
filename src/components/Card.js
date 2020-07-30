import React from "react";
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ data, addFav, heart, cross, handleRemoveFav }) => {
  const url = data.thumbnail.path + "." + data.thumbnail.extension;

  return (
    <div style={{ position: "relative" }}>
      {heart ? (
        <div onClick={() => addFav(data.id, "char")} className="heart-icon">
          <FontAwesomeIcon icon={["far", "heart"]} />
        </div>
      ) : cross ? (
        <div onClick={() => handleRemoveFav(data.id)} className="heart-icon">
          <FontAwesomeIcon icon="times" />
        </div>
      ) : null}
      <Link to={`${data.id}/comics`} className="char-card">
        <span>{data.name}</span>
        <img alt="character" src={url} />
        <p>{data.description && data.description}</p>
      </Link>
    </div>
  );
};

export default Card;
