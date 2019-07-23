import App from './App';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import User from './User';
import Profile from './myProfile';
import Leaderboard from './Leaderboard';
import Protest from './protest';
import About from './About';
import History from './history';


const Routes = () => (
  <Router>
    <div>
      <Route exact path= {"/"} component={() => <App />}/>
      <Route exact path= {"/login"} component={() => <Login />}/>
      <Route exact path= {"/user"} component={() => <User />}/>
      <Route exact path= {"/about"} component={() => <About />}/>
      <Route exact path= {"/myProfile"} component={() => <Profile />}/>
      <Route exact path= {"/Leaderboard"} component={() => <Leaderboard />}/>
      <Route exact path= {"/protest.js"} component={() => <Protest />}/>
      <Route exact path= {"/history"} component={() => <History />}/>

    </div>
  </Router>
);

export default Routes;
