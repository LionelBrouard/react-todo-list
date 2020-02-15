import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offers from "./containers/Offers";
import MyCollection from "./containers/MyCollection";
import LogIn from "./containers/LogIn";
import SignUp from "./containers/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Offer from "./containers/Offer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/log_in">
            <LogIn />
          </Route>
          <Route path="/sign_up">
            <SignUp />
          </Route>
          <Route path="/my_collection">
            <MyCollection />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/">
            <Offers />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}
export default App;
