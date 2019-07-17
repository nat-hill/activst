import React, {Component} from 'react';
import './myProfile.css';
import './App.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render(){
    return(
      <div class ='profilePage'>
        <h3 class = 'heading'>
          My Profile
        </h3>
        <p class='profile'>
          This is your Profile. Something will happen here at some point.
        </p>
      </div>
    )
  }
}

export default Profile;
