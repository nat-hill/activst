import React, {Component} from 'react';
import AppComponent from './AppComponent';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
      <div>
      <body>
        <h1>
    <b>Title</b>
        </h1>
        <p>This is the homepage of our website. Coming soon.</p>
        <img src="https://snazzy-maps-cdn.azureedge.net/assets/132-light-gray.png?v=20170626081135"/>
        <a href = " http://localhost:3000/second "> Second Page </a>
        <a href = " http://localhost:3000/services "> , Services </a>
      </body>
      </div>

    );
  }
}

export default App;
