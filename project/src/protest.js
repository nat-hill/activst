import React, {Component} from 'react';
import firestore from "./Firestore";
import firebase from 'firebase';
class Protest extends React.Component {
  constructor() {
    super();
    this.state = {
     email: "",
     fullname: "",
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
     email: "",
     review: "",
     rating: 5
   });
   const db = firestore.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    const userRef = db.collection("Users").add({
      fullname: this.state.fullname,
      email: this.state.email,
      review: this.state.review,
      rating: this.state.rating
    });
  };
 render() {

   return (
       <form onSubmit={this.addUser}>
         <input
           type="text"
           name="fullname"
           placeholder="Full name"
           onChange={this.updateInput}
           value={this.state.fullname}
           onChange={this.updateInput}
	          />
​
          <input
           type="email"
           name="email"
           placeholder="Email"
           onChange={this.updateInput}
              />
<br/>
<br/>
           <input
           type="text"
           name="location"
           placeholder="Location"
           onChange={this.updateInput}
           value={this.state.review}
           onChange={this.updateInput}
            />
<br/>
           <input
           type="text"
           name="location"
           placeholder="Protest Location"
              onChange={this.updateInput}
       value={this.state.rating}
       onChange={this.updateInput}
></input>
         <button type="submit">Submit</button>
      </form>
  )}
}
export default Protest;
