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
  addProtest = e => {
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
    const userRef = db.collection("protest").add({
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
      <div class="form-style-8">
    <h5>  <a><img src="https://i.imgur.com/uBWa3ha.png" width="1024" height="100 px" alt="Create your own protest!" /></a></h5>
       <form onSubmit={this.addProtest} class="balls">
       <p class ="balls2"></p>
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
           type="datetime"
           name="time"
           placeholder="Time & Date"
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
       value={this.state.description}
       onChange={this.updateInput}
></input>
         <button type="submit" class="btn btn-lg btn-primary" >Submit</button>
      </form>
    </div>
    </div>
  )}
}
export default Protest;
