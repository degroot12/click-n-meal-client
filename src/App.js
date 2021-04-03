import {React, useState, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
// import axios from "axios";
// import config from "../config.js";
import MyNav from './components/MyNav'
import Home from './components/Home'
import Error from './components/Error'

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
          path='/signin'
          render={() => {
            return <Signin />
          }} />

        


      </Switch>
    </div>

  )
}

export default App;
