import React, { useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
// import axios from "axios";
// import config from "../config.js";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import About from "./components/About";
import Error from "./components/Error";

// TODO: add to request with login { withCredentials: true }



function App(props) {
  const [error, setError] = useState(null);

  return(
    <div>
      <MyNav />
      <Switch>
        <Route 
          exact path="/" 
          render={() => {
            return <Home />
        }} />

        <Route 
          path="/signup"
          render={() => {
            return <Signup />
          }} />

        <Route 
          path="/signin"
          render={() => {
            return <Signin />
          }} />  

        <Route 
          path="/about" component={About}
        />  

        <Route 
          path="/" component={Error}
        />    


      </Switch>
    </div>

  )
}

export default App;
