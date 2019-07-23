import React, {Component} from 'react';
import AppComponent from './AppComponent';
import './App.css';
import Loginbutton from './loginButton';

class Navbar extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
        <div class ="homePageBackground">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
      crossorigin=""/>

          <h1 class ="header1">
          <img class="logo1" src="https://i.imgur.com/GjeVtFG.png" alt="logo"/>
          <Loginbutton />
          </h1>
          <meta name = "description" content = "Protest Maker"/>
          <meta name = "keywords" content = "Protest, Activism, politics, actvst"/>
          <link rel = "stylesheet" type = "text/css" href="ssheet1.css"/>
          <div class = "sticky">
            <ul class ="lista">
              <li class = "listb">
                <a class="nav" href="/"><b>Home</b></a>
              </li>
              <li class = "listb">
                <a class="nav" href="/history"><b>Protests in the Past</b></a>
              </li>
              <li class = "listb">
                <a class="nav" href="/protest.js"><b>Create a Protest</b></a>
              </li>
              <li class ="listb">
                <a class="nav" href="myProfile"><b>My Profile</b></a>
              </li>
              <li class ="listb">
                <a class="nav" href="leaderboard.html"><b>Leaderboard</b></a>
              </li>
              <li class="listb">
                <a class="nav" href="about"><b>About Us</b></a>
              </li>

            </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
