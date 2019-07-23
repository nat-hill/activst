import React, {Component} from 'react';
import Navbar from './navBar';
import './App.css';
var L = require("leaflet");
var ColorsList = new Array('red', 'green', 'blue', 'orange', 'yellow', 'orange', "#4c69fa", "#fa4ce6","#52fa4c","#ef9906");


class History extends Component {
  constructor(){
    super();
    this.state = {};
  }
  componentDidMount(){
  var historymap = L.map('mapid').setView([40.7831, -73.9712],9);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 15,
            minZoom: 12,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiY3VzdW1tZXIiLCJhIjoiY2p5NXc5cXhwMDFxeTNmbzhwNWpsZTRibSJ9.204smoZZqhejVVBy7oiHfg'
        }).addTo(historymap);

        var circle = L.circle([40.7510961, -73.9749958], {
          color: '',
          fillColor: ColorsList[Math.floor(Math.random()*ColorsList.length)],
          fillOpacity: 0.5,
          radius: 500
      }).addTo(historymap);
      circle.bindPopup("The Draft Riots of 1863");

        var circle = L.circle([40.7829, -73.9654], {
          color: '',
          fillColor: ColorsList[Math.floor(Math.random()*ColorsList.length)],
          fillOpacity: 0.5,
          radius: 900
      }).addTo(historymap);
      circle.bindPopup("Peace March, April 15, 1967");

        var circle = L.circle([40.7900, -73.9650], {
          color: '',
          fillColor: ColorsList[Math.floor(Math.random()*ColorsList.length)],
          fillOpacity: 0.5,
          radius: 200
      }).addTo(historymap);
      circle.bindPopup("Anti-Nuclear March, June 12, 1982");

        var circle = L.circle([40.7490646, -73.9679989], {
          color: '',
          fillColor: ColorsList[Math.floor(Math.random()*ColorsList.length)],
          fillOpacity: 0.5,
          radius: 200
      }).addTo(historymap);
      circle.bindPopup("Anti-Iraq War Protest, 2003");
  }
  render(){
    return(
      <div class ="homePageBackground">
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
    crossorigin=""/>
          <Navbar />
          <div id="mapid"></div>
      </div>
    );
  }
}

export default History;
