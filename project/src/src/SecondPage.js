import React, {Component} from 'react';
import SecondPageComponent from './SecondPageComponent';
import './App.css';

class SecondPage extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
      <div>
        <p>This is the second page.</p>
        <SecondPageComponent />
      </div>

    );
  }
}

export default SecondPage;
