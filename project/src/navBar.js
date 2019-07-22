import React, {Component} from 'react';
import AppComponent from './AppComponent';
import './App.css';

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
          </h1>
          <meta name = "description" content = "Prostest Maker"/>
          <meta name = "keywords" content = "Protest, Activism, politics, actvst"/>
          <link rel = "stylesheet" type = "text/css" href="ssheet1.css"/>
          <div class = "sticky">
            <ul class ="lista">
              <li class = "listb">
                <a class="nav" href="/">Home</a>
              </li>
              <li class = "listb">
                <a class="nav" href="/login">Log In</a>
              </li>
              <li class = "listb">
                <a class="nav" href="/protest.js">Create a Protest</a>
              </li>
              <li class ="listb">
                <a class="nav" href="myProfile">My Profile</a>
              </li>
              <li class ="listb">
                <a class="nav" href="leaderboard.html">Leaderboard</a>
              </li>
              <li class="listb">
                <a class="nav" href="about">About Us</a>
              </li>

            </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
