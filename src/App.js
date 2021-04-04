import React, { useState, useEffect} from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import axios from "axios";
import config from "./config.js";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Profile from "./components/Profile";
import CreateRecipe from "./components/CreateRecipe";
import About from "./components/About";
import Error from "./components/Error";


function App(props) {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  console.log('loggedin user: ', loggedInUser)

  // TODO: add to request with login { withCredentials: true }

  // This will run just once after the first render and never again (with [] as 2nd useEffect parameter)
  // Similar as componentDidMount
  // storing data loggedin user so no new login is necessary
  useEffect(() => {
    if (!loggedInUser) {
      axios 
        .get(`${config.API_URL}/api/user`, { withCredentials: true })
        .then((response) => {
          setLoggedInUser(response.data);
          console.log('loggedindata ', response.data)
        })
        .catch((err) => {
          setError('error with loggedin data', err);
        });      
    }
  }, []);


  const handleSignup = (event) => {
    event.preventDefault();

    axios
      .post(`${config.API_URL}/api/signup`,
      { username: event.target.username.value,
        email: event.target.email.value,
        password: event.target.password.value }, 
      { withCredentials: true } )
      .then((response) => {
        setLoggedInUser(response.data);
        history.push("/signin"); 
      })
      .catch((err) => {
        console.log('#### ', err.response)
        setError(err.response.data);      
      })
  };  

  const handleSignin = (event) => {
    event.preventDefault();
    console.log('hereee')

    axios
      .post(`${config.API_URL}/api/signin`,
      { email: event.target.email.value,
        password: event.target.password.value },
      { withCredentials: true } )
      .then((response) => {
        setLoggedInUser(response.data);
        history.push("/")
      })
      .catch((err) => {
        console.log('>>> ', err.response)
        setError(err.response.data);
      });  
  };

  const handleLogout = () => {
    axios
      .post(`${config.API_URL}/api/logout`, {}, { withCredentials:true })
      .then(() => {
        setLoggedInUser(null);
        history.push("/");
      })
      .catch((err) => {
        setError(err.response.data)
      })
  }

  return(
    <div>
      <MyNav onLogout={handleLogout} user={loggedInUser}/>
      <Switch>
        <Route 
          exact path="/" 
          render={() => {
            return <Home />
        }} />

        <Route 
          path="/signup"
          render={(routeProps) => {
            return <Signup error={error} onSignup={handleSignup} {...routeProps}/>
          }} />

        <Route 
          path="/signin"
          render={(routeProps) => {
            return <Signin error={error} onSignin={handleSignin} {...routeProps}/>
          }} />          

        <Route 
          path="/profile" component={Profile}
        />  

        <Route 
          path="/create-recipe" component={CreateRecipe}
        /> 

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
