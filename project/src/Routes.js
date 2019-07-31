import App from './App';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './Login';
import User from './User';
import Profile from './myProfile';
import Leaderboard from './Leaderboard';
import Protest from './protest';
import About from './About';
import History from './history';
import BetterProfile from './BetterProfile';
import firebase from './Firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import React from 'react';
import Welcome from './Welcome';
//import React, { Component } from 'React';

/*
const Child = ({ match }) => (
  <div>
    <h3>Username: {match.params.id}</h3>
  </div>
)
*/

//<div>
//<h2> Accounts </h2>
//<ul>
//<li><Link to='/profile/user1'>Profile1</Link></li>
//</ul>
//<Route path='/profile/:id' component={Child} />
//</div>

const Routes = () => (
  <Router>
    <div>
      <Route exact path= {"/"} component={() => <App />}/>
      <Route exact path= {"/login"} component={() => <Login />}/>
      <Route exact path= {"/user"} component={() => <User />}/>
      <Route exact path= {"/about"} component={() => <About />}/>
      <Route exact path= {"/myProfile"} component={() => <BetterProfile />}/>
      <Route exact path= {"/Leaderboard"} component={() => <Leaderboard />}/>
      <Route exact path= {"/protest.js"} component={() => <Protest />}/>
      <Route exact path= {"/history"} component={() => <History />}/>
      <Route exact path= {"/welcome"} component={() => <Welcome />}/>
    </div>
  </Router>
);


export default Routes;
