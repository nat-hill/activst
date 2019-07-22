import React, {Component} from 'react';
import AppComponent from './AppComponent';
import './App.css';

class Button extends Component {
  constructor(){
    super();
    this.state = {};
  }
  increaseBet(){
    this.setState({
      bet:this.state.bet+5
    });
  }
  render(){
    return(
      <button onClick = () => {this.increaseBet()}>
    )
  }
}
