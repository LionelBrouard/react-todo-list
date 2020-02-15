import React, { useState, UseEffect } from "react";
import { Link } from "react-router-dom";
import Offer from "./Offer";
import data from "../data.json";
import UniqueOffer from "../components/UniqueOffer";

function Offers() {
  return (
    <div className="list">
      {data.games.map((elem, index) => {
        return (
          <>
            <Link to={"/offer/" + elem.id} className="presentationgames">
              <UniqueOffer {...elem} />
            </Link>
          </>
        );
      })}
    </div>
  );
}

export default Offers;
