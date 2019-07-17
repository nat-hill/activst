import React from 'react';
import firebase from "./Firestore";
class User extends React.Component{
  constructor(){
    super();
    this.state = {
      email: "",
      fullname: ""
    };
  }
  updateInput = e => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  addUser = e => {
    e.preventDefault();  //stops page from refreshing
    const db = firebase.firestore();
      db.settings({
        timestampsInSnapshots: true
      });
      const userRef = db.collection("user").add({
        fullname: this.state.fullname,
        email: this.state.email
      });
    this.setState({
      fullname: "",
      email: "",
    });
  };
  render(){
    return(
      <div>
      <form onSubmit={this.addUser}>
        <input
          type = "text"
          name = "fullname"
          placeholder = "fullname"
          onChange = {this.updateInput}
          value = {this.state.fullname}  //sets the value
        />
        <input
          type = "email"
          name = "email"
          placeholder = "email"
          onChange = {this.updateInput}
          value = {this.state.email}
        />
        <button type="submit" class="myButton">Submit</button>
      </form>
      </div>
    )
  }
}
var userRef = firebase.database().ref('entries/fullname');
userRef.on('value', function(snapshot) {
  console.log(snapshot.val());
});
export default User;
