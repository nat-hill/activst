import React, {Component} from 'react';
import AppComponent from './AppComponent';
import './App.css';
var L = require("leaflet");

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }


  componentDidMount(){
  var mymap = L.map('mapid').setView([40.7831, -73.9712],9);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiY3VzdW1tZXIiLCJhIjoiY2p5NXc5cXhwMDFxeTNmbzhwNWpsZTRibSJ9.204smoZZqhejVVBy7oiHfg'
        }).addTo(mymap);

        var circle = L.circle([40.7127, -74.0134], {
                   color: '#0583ad',
                   fillColor: '#08bbf7',
                   fillOpacity: 0.5,
                   radius: 500
               }).addTo(mymap);
               circle.bindPopup("Pride Protest Here!");

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
              <a class="nav" href="homePage.html">Home</a>
            </li>
            <li class = "listb">
              <a class="nav" href="/login">Log In</a>
            </li>
            <li class = "listb">
              <a class="nav" href="map.html">Map</a>
            </li>
            <li class ="listb">
              <a class="nav" href="myProfile">My Profile</a>
            </li>
            <li class ="listb">
              <a class="nav" href="leaderboard.html">Leaderboard</a>
            </li>
            <li class="listb">
              <a class="nav" href="aboutUs">About Us</a>
            </li>

          </ul>

          <div id="mapid"></div>

        </div>

      </div>
    );

  }
}

export default App;
