import React, {Component} from 'react';
import AppComponent from './AppComponent';
import './App.css';

class Navbar extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
      <div>
        <ul class="ul">
          <li class="li">
            <a class ="nav" href="App.js">Home Page</a>
          </li>
          <li class="li">
            <a class ="nav" href="myProfile.js">My Profile</a>
          </li>
          <li class="li">
            <a class ="nav" href="">Start a Protest</a>
          </li>
          <li class="li">
            <a class="nav" href="">Leaderboard</a>
          </li>
          <li class="li">
            <a class="nav" href="aboutUs.js">About Us</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
