import React from 'react';
import firebase from "./Firestore";

class User extends React.Component{
  constructor(){
    super();
    this.state = {
      email: "",
      fullname: "",
      bio: ""
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
          fullname: this.state.fullname,
          email: this.state.email,
          bio: this.state.bio
      });
    }
  });
}
  updateInput = e => {
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  addUser = e => {
    e.preventDefault();
    this.setState({
      fullname: "",
      email: "",
      bio: ""
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
          value = {this.state.fullname}
        />
        <input
          type = "email"
          name = "email"
          placeholder = "email"
          onChange = {this.updateInput}
          value = {this.state.email}
        />
        <input
          type = "text"
          name = "bio"
          placeholder = "description"
          onChange = {this.updateInput}
          value = {this.state.bio}
        />
        <button type="submit" class="btn btn-lg btn-primary">Submit</button>
      </form>
      </div>
    )
  }
}
export default User;
/*var userRef = firebase.database().ref('entries/fullname');
userRef.on('value', function(snapshot) {
  console.log(snapshot.val());
});*/
