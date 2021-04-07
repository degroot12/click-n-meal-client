import React, { useState, useEffect} from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import axios from "axios";
import config from "./config.js";
import MyNav from "./components/MyNav";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import MyPage from "./components/MyPage";
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
    // message for developers
    console.log('*** Hi there! Good to see you here! Any great ideas for click \'n meal? Let us know! ***')
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
        history.push("/mypage"); 
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

  const handleCreateRecipe = (event) => {
    event.preventDefault();
    console.log('before then block',event)
    axios
      .post(`${config.API_URL}/api/create-recipe`, { name: event.target.name.value,
        ingrName: event.target.ingrName.value,
        ingrUnit: event.target.ingrUnit.value, ingrAmount: event.target.ingrAmount.value }, { withCredentials:true })
      .then((response) => {
        console.log('in thenblock----', response)
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
          path="/mypage" component={MyPage}
        />  

        <Route 
          path="/create-recipe"
          render={(routeProps) => {
            return <CreateRecipe error={error} onCreateRecipe={handleCreateRecipe} {...routeProps}/>
          }} 
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
