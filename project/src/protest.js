import React, {Component} from 'react';
import firestore from "./Firestore";
import firebase from 'firebase';
import Navbar from './navBar';

class Protest extends React.Component {
  constructor() {
    super();
    this.state = {
     fullname: "",
     time: "",
     location: "",
     descritption: "",
     data:[]
    };
};

    updateInput = e => {
     this.setState({
       [e.target.name]: e.target.value
     });
}
  addUser = e => {
   e.preventDefault();
   this.setState({
     fullname: "",
     time: "",
     location: "",
     description: "",
   });
   const db = firestore.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("users").add({
      fullname: this.state.fullname,
      email: this.state.time,
      review: this.state.location,
      rating: this.state.description
    });
  };
 render() {
   return(
    <div>
      <Navbar />
       <form onSubmit={this.addprotest} class="balls">
       <p class ="balls2">Name</p>
        <input
           type="text"
           name="fullname"
           placeholder="Full Name"
           onChange={this.updateInput}
           value={this.state.fullname}
           onChange={this.updateInput}
	          />
​
          <input
           type="time"
           name="time"
           placeholder="time"
           onChange={this.updateInput}
              />
<br/>
<br/>
           <input
           type="text"
           name="location"
           placeholder="Location"
           onChange={this.updateInput}
           value={this.state.location}
           onChange={this.updateInput}
            />
<br/>
           <input
           type="text"
           name="description"
           placeholder="Give a brief description of your protest."
              onChange={this.updateInput}
       value={this.state.descritption}
       onChange={this.updateInput}
></input>
         <button type="submit">Submit</button>
      </form>
    </div>
  )}
}
export default Protest;
