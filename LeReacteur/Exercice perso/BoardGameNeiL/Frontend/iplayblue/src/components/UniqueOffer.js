import React from "react";
// import data from "../data.json";

function UniqueOffer({
  name,
  description,
  images,
  min_players,
  max_players,
  id
}) {
  return (
    <>
      <div className="wrapper">
        <div className="generaloffer">
          <h2>{name} </h2>
          <div className="picture">
            <img src={images.small} alt={name} style={{ objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default UniqueOffer;
