import React, { Component } from 'react';
import firestore from "./Firestore";
import Firebase from 'firebase';
import firebase from 'firebase';
import Navbar from './navBar';
import App from './App';
import './App.css';
import Login from './Login';
import Geocode from 'react-geocode';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import User from './User';

var L = require("leaflet");

Geocode.setApiKey("AIzaSyCxo325N-PHdHAUPyZdjynOeYlDTaC8kKc");

class Protest extends Component {
  constructor() {
    super();
    this.state = {
      protestname: "",
      time: "",
      location: "",
      description: "",
      keyTerm: "",
      data: [],
      lat: null,
      lng: null,
      submitTimestamp: null,
      signedIn: false,
      currentUser: null,
      varTimestamp: null
    };
  };

  componentDidMount() {
    var mymap = L.map('mapid1').setView([40.7136, -73.9724], 9);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 15,
      minZoom: 12,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1IjoiY3VzdW1tZXIiLCJhIjoiY2p5NXc5cXhwMDFxeTNmbzhwNWpsZTRibSJ9.204smoZZqhejVVBy7oiHfg'
    }).addTo(mymap);
    console.log('didmount')
  }
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          signedIn: true,
          currentUser: user
        });

        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
      }
      firebase.firestore().collection("users").doc(user.uid).onSnapshot(docSnapshot => {
        this.setState({ varTimestamp: docSnapshot.data().submitTimestamp });
      })
      console.log('willmount')
    });
  }


  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  addProtest = e => {
    e.preventDefault();
    Geocode.fromAddress(this.state.location).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          lat: lat,
          lng: lng
        })
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            this.setState({
              signedIn: true,
              currentUser: user
            });
            const db = firestore.firestore();
            db.settings({
              timestampsInSnapshots: true
            });
            db.collection("protest").add({
              protestname: this.state.protestname,
              time: this.state.time,
              location: this.state.location,
              description: this.state.description,
              keyTerm: this.state.keyTerm
            });
            db.collection("users").doc(user.uid).update({
              submitTimestamp: Firebase.firestore.Timestamp.now()
            })
            this.setState({
              protestname: "",
              time: "",
              location: "",
              description: "",
              keyTerm: ""
            });
          }
        })

      },
      error => {
        alert('error invalid location');
        return;
      }
    );
  };

  render() {
    let varTimestamp = this.state.varTimestamp
    let currentTimestamp = Firebase.firestore.Timestamp.now()
    if (currentTimestamp != null && varTimestamp != null) {
      var seconds_diff = currentTimestamp.seconds - varTimestamp.seconds
    }
    var secondsRemaining = 86400 - seconds_diff
    var hoursRemaining = Math.floor(secondsRemaining / 3600)
    var minRemaining = Math.floor((secondsRemaining % 3600) / 60)
    var secondsRemaining = secondsRemaining % 60
    if (seconds_diff < 86400) {
      return (
        <div>
          <Navbar />
          <div class="plzalign">
            <div class="form-style-5">
              <div class="Wait-24-hrs-page">
                <p>You have submitted a protested in the past 24 hours.</p><br />
                <p>You have {hoursRemaining} hours, {minRemaining} minutes, and {secondsRemaining} seconds remaining before you can submit another one.</p><br />
                <p>Thank you.</p>
              </div>
            </div>
          </div>
          <div id="mapid1" class='BACKGROUNDMAP'></div>
        </div>
      )
    } else if (seconds_diff >= 86400) {
      return (
        <div>
          <Navbar />
          <div class="plzalign">
            <div class="form-style-5">
              <form class="plzalign" onSubmit={this.addProtest}>
                <input
                  required
                  type="text"
                  name="protestname"
                  placeholder="Protest Name"
                  onChange={this.updateInput}
                  value={this.state.protestname}
                  onChange={this.updateInput}
                />

                <input
                  required
                  type="datetime"
                  name="time"
                  placeholder="Time & Date"
                  onChange={this.updateInput}
                />
                <br />
                <input
                  required
                  type="text"
                  name="location"
                  placeholder="Location"
                  onChange={this.updateInput}
                  value={this.state.location}
                  onChange={this.updateInput}
                />
                <br />
                <input
                  required
                  type="text"
                  name="description"
                  placeholder="Give a brief description of your protest."
                  onChange={this.updateInput}
                  value={this.state.description}
                  onChange={this.updateInput}
                ></input>



                <label>
                  Pick the option that best describes your protest:
          <select name="keyTerm" onChange={this.updateInput.bind(this)}>
                    <option value="globalwarming" name="keyTerm" >Global Warming</option>
                    <option value="genderequality" name="keyTerm">Gender Equality</option>
                    <option value="racialequality" name="keyTerm">Racial Equality</option>
                    <option value="policebrutality" name="keyTerm">Police Brutality</option>
                    <option value="lgbtq" name="keyTerm">LGBTQ+</option>
                    <option value="other" name="keyTerm">Other</option>
                  </select>
                </label>


                <div class="submitButton">
                  <button type="submit" class="btn btn-lg btn-primary" >Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div id="mapid1" class='BACKGROUNDMAP'></div>
        </div>
      );
    } else if (currentTimestamp != null && varTimestamp == null) {
      return (
        <div>
          <Navbar />
          <div class="plzalign">
            <div class="form-style-5">
              <form class="plzalign" onSubmit={this.addProtest}>
                <p>Welcome! You can create a protest every 24 hours, so be mindful of what you post. -Activst</p>
                <input
                  required
                  type="text"
                  name="protestname"
                  placeholder="Protest Name"
                  onChange={this.updateInput}
                  value={this.state.protestname}
                  onChange={this.updateInput}
                />

                <input
                  required
                  type="datetime"
                  name="time"
                  placeholder="Time & Date"
                  onChange={this.updateInput}
                />
                <br />
                <input
                  required
                  type="text"
                  name="location"
                  placeholder="Location"
                  onChange={this.updateInput}
                  value={this.state.location}
                  onChange={this.updateInput}
                />
                <br />
                <input
                  required
                  type="text"
                  name="description"
                  placeholder="Give a brief description of your protest."
                  onChange={this.updateInput}
                  value={this.state.description}
                  onChange={this.updateInput}
                ></input>



                <label>
                  Pick the option that best describes your protest:
      <select name="keyTerm" onChange={this.updateInput.bind(this)}>
                    <option value="globalwarming" name="keyTerm" >Global Warming</option>
                    <option value="genderequality" name="keyTerm">Gender Equality</option>
                    <option value="racialequality" name="keyTerm">Racial Equality</option>
                    <option value="policebrutality" name="keyTerm">Police Brutality</option>
                    <option value="lgbtq" name="keyTerm">LGBTQ+</option>
                    <option value="other" name="keyTerm">Other</option>
                  </select>
                </label>


                <div class="submitButton">
                  <button type="submit" class="btn btn-lg btn-primary" >Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div id="mapid1" class='BACKGROUNDMAP'></div>
        </div>
      );
    }
  }
}
export default Protest;