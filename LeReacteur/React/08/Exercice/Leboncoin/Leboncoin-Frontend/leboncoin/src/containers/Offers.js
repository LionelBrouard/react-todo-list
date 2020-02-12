import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UniqueOffer from "../components/UniqueOffer";
import axios from "axios";
import Logo from "../assets/images/logoLBC.png";

function Offers() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-backend-neil.herokuapp.com/"
      );
      setData(response.data);

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Chargement en cours</p>
      ) : (
        <div>
          <div className="header">
            <div className="wrapper">
              <img src={Logo} className="logo"></img>
            </div>
          </div>
          <UniqueOffer />
          <br />
        </div>
      )}
    </div>
  );
}

export default Offers;
