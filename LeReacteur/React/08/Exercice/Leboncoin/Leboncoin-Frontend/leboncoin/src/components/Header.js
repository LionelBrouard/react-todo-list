import React from "react";
import Logo from "../assets/images/logoLBC.png";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faplussquare } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// library.add(faplussquare);
import Searchbarre from "../components/Searchbarre";

function Header() {
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <div className="headergen">
            <div className="headertotal">
              <img src={Logo} className="logo"></img>
              <button className="postoffer">
                {/* <FontAwesomeIcon icon="plus-square" /> */}+ Déposer une
                annonce
              </button>
              <button className="search">O Rechercher</button>
            </div>
            <button className="connect">Se connecter</button>
          </div>
        </div>
      </div>
      <div className="orange"></div>
      <div className="inputsearch">
        <Searchbarre />
      </div>
    </>
  );
}

export default Header;
