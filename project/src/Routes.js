import App from './App';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Login';
import User from './User';
import AboutUs from './aboutUs';

const Routes = () => (
  <Router>
    <div>
      <Route exact path= {"/"} component={() => <App />}/>
      <Route exact path= {"/login"} component={() => <Login />}/>
      <Route exact path= {"/user"} component={() => <User />}/>
      <Route exact path= {"/aboutUs"} component={() => <AboutUs />}/>
    </div>
  </Router>
);

export default Routes;
