import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import App from "../App";
function Routers(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" component={App}></Route>
        <Redirect from="/" to="home" exact></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default Routers;
