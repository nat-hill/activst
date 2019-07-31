import firebase from './Firestore';
import React, {Component} from 'react';
import Login from './Login';

class Biography extends Component{
  constructor(){
    super();
    this.state = {signedIn: false, currentUser: null, biography:''};
  }
  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          signedIn: true,
          currentUser: user
        });
        const db = firebase.firestore();
        const userRef = db.collection("users");
        console.log(user.uid);
        let observer = userRef.doc(user.uid).onSnapshot(docSnapshot => {
          console.log("Received doc snapshot: ${docSnapshot}");
          console.log(docSnapshot.data());
          this.setState({biography:docSnapshot.data().biography});
        }, err => {
          console.log('Encountered error: ${err}');
        });
      }
    })
  }

  render(){
    if (this.state.signedIn){
      console.log(this.state.biography);
      return(
        <div>
        {this.state.biography}
        </div>
      );
    } else {
      return(
        <div>
        <Login/>
        </div>
      )
    }
    }
  }

export default Biography;
