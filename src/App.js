import React from "react";
import { Switch, Route } from "react-router-dom";
// import axios from "axios";
// import config from "../config.js";
import MyNav from './components/MyNav'


function App(props) {

  return(
    <div>
      <MyNav />
      <h1>The homepage</h1>
      <Switch>
        <Route exact path="/" render={() => {
          return <Home />
        }} />


      </Switch>
    </div>

  )
}

export default App;
