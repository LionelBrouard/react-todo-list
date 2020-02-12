import React from "react";
import { useParams } from "react-router-dom";

function Offer(props) {
  const params = useParams();
  const { id } = params;

  return <span>Offer {id}</span>;
}

export default Offer;
