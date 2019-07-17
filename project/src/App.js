import React, {Component} from 'react';
import AppComponent from './AppComponent';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      </head>
      <div>
        <h1 class ="header1">
        activst
        </h1>
        <meta name = "description" content = "Prostest Maker"/>
        <meta name = "keywords" content = "Protest, Activism, politics, actvst"/>
        <link rel = "stylesheet" type = "text/css" href="ssheet1.css"/>
        <div class = "sticky">
          <ul class ="lista">
            <li class = "listb">
              <a class="nav" href="homePage.html">Home</a>
            </li>
            <li class = "listb">
              <a class="nav" href="/login">Log In</a>
            </li>
            <li class = "listb">
              <a class="nav" href="map.html">Map</a>
            </li>
            <li class ="listb">
              <a class="nav" href="profile.html">My Profile</a>
            </li>
            <li class ="listb">
              <a class="nav" href="leaderboard.html">Leaderboard</a>
            </li>
            <li class="listb">
              <a class="nav" href="aboutUs">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
