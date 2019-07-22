import App from './App';
import SecondPage from './SecondPage';
import ServicePage from './ServicePage';
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const Routes = () => (
  <Router>
    <div>
      <Route exact path= {"/"} component={() => <App />}/>
      <Route exact path= {"/second"} component={() => <SecondPage />}/>
      <Route exact path= {"/services"} component={() => <ServicePage />}/>
    </div>
  </Router>
);

export default Routes;
