import React, { useState } from "react";
import data from "../data.json";
console.log(data);
function Offer() {
  return (
    <>
      <div className="gamepic">
        <img src={data.pictures} alt={data.title} />
        <h4>{data.games.name}</h4>
      </div>
    </>
  );
}

export default Offer;
