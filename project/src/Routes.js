import App from './App';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import User from './User';
import AboutUs from './aboutUs';
import Profile from './myProfile';
import About from './About';

const Routes = () => (
  <Router>
    <div>
      <Route exact path= {"/"} component={() => <App />}/>
      <Route exact path= {"/login"} component={() => <Login />}/>
      <Route exact path= {"/user"} component={() => <User />}/>
      <Route exact path= {"/about"} component={() => <About />}/>
      <Route exact path= {"/myProfile"} component={() => <Profile />}/>
    </div>
  </Router>
);

export default Routes;
