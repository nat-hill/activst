import React from 'react';
import firebase from "./Firestore";
import firestore from "./Firestore";
import Navbar from "./navBar";
import { Form } from 'react-bootstrap';
var L = require("leaflet");

class User extends React.Component{
  constructor(){
    super();
    this.state = {
      username: "",
      fullname: "",
      biography: "",
      globalwarming:"",
      genderequality: "",
      racialequality:  "",
      policebrutality: "",
      lgbtq: "",
       data:[]
    };
  };
  componentWillMount(){
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
        const userRef = db.collection("users");

        userRef.doc(user.uid).set({
          username: this.state.username,
          fullname: this.state.fullname,
          biography: this.state.biography,
          globalwarming: this.state.globalwarming,
          genderequality: this.state.genderequality,
          racialequality:  this.state.racialequality,
          policebrutality: this.state.policebrutality,
          lgbtq: this.state.lgbtq

      });
    }
  });
}

componentDidMount(){
  var mymap = L.map('mapid1').setView([40.7136, -73.9724],9);

  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 15,
            minZoom: 12,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiY3VzdW1tZXIiLCJhIjoiY2p5NXc5cXhwMDFxeTNmbzhwNWpsZTRibSJ9.204smoZZqhejVVBy7oiHfg'
        }).addTo(mymap);

}
  updateInput = e => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  addUser = e => {
    e.preventDefault();
    this.setState({
      username: "",
      fullname: "",
      biography: "",
      globalwarming:"",
      genderequality: "",
      racialequality:  "",
      policebrutality: "",
      lgbtq: ""
    });
    const db = firestore.firestore();
     db.settings({
       timestampsInSnapshots: true
     });
     const userRef = db.collection("users").add({
       username: this.state.username,
       fullname: this.state.fullname,
       biography: this.state.biography,
       globalwarming: this.state.globalwarming,
       genderequality: this.state.genderequality,
       racialequality:  this.state.racialequality,
       policebrutality: this.state.policebrutality,
       lgbtq: this.state.lgbtq
     });
  };
  render(){
    return(
      <div>
      <Navbar />
      <div class ="plzalign">
      <div class="form-style-5">
       <form class ="plzalign" onSubmit={this.addUser}>
        <input
        required
           type="text"
           name="username"
           placeholder="Username"
           onChange={this.updateInput}
           value={this.state.username}
           onChange={this.updateInput}
	          />
<br/>
           <input
           required
           type="text"
           name="fullname"
           placeholder="Full Name"
           onChange={this.updateInput}
           value={this.state.fullname}
           onChange={this.updateInput}
            />
<br/>
           <input
           required
           type="text"
           name="biography"
           placeholder="Give a brief description of yourself"
              onChange={this.updateInput}
       value={this.state.biography}
       onChange={this.updateInput}
></input>  <b> What kinds of protests would you like to see? </b>
        <Form.Check
        type="checkbox"
        label="Global Warming"
        onChange={this.updateInput}
        value={this.state.globalwarming}
        onChange={this.updateInput}
        />
        <Form.Check
        type="checkbox"
        label="Gender Equality"
        onChange={this.updateInput}
        value={this.state.genderequality}
        onChange={this.updateInput}
        />
        <Form.Check
        type="checkbox"
        label="Racial Equality"
        onChange={this.updateInput}
        value={this.state.racialequality}
        onChange={this.updateInput}
        />
        <Form.Check
        type="checkbox"
        label="Police Brutality"
        onChange={this.updateInput}
        value={this.state.policebrutality}
        onChange={this.updateInput}
        />
        <Form.Check
        type="checkbox"
        label="LGBTQ+"
        onChange={this.updateInput}
        value={this.state.lgbtq}
        onChange={this.updateInput}
        />
        <Form.Check
        type="checkbox"
        label="Other"
        onChange={this.updateInput}
        value={this.state.pther}
        onChange={this.updateInput}
        />
        <div class = "submitButton">
         <button type="submit" class="btn btn-lg btn-primary" >Submit</button>
        </div>
      </form>
    </div>
    </div>
    <div id="mapid1" class='BACKGROUNDMAP2'></div>
      </div>
    )
  }
}
export default User;
/*var userRef = firebase.database().ref('entries/fullname');
userRef.on('value', function(snapshot) {
  console.log(snapshot.val());
});*/
