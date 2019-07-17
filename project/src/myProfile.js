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
          Gamer Johnson
        </p>
        <p>Medals: None </p>
        <p>Achievements: None </p>
      </div>
    )
  }
}

export default Profile;
