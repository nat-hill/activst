import React, {Component} from 'react';
import './App.css';
import Navbar from './navBar';
import firebase from './Firestore';
import ProtestName from './retrieve_protestname';
import { Container, Jumbotron } from 'react-bootstrap';

class CustomProtestPage extends Component{
  constructor(){
    super();
    this.state = {};
  }
  render(){
    return(
      <div class = 'protestHeader'>
      <Navbar/>
      <Container>
      <Jumbotron>
      <h1>title</h1>
      <p>description:</p>
      <p>location:</p>
      <p>time:</p>
      </Jumbotron>
      </Container>
      </div>
    )
  }
}

export default CustomProtestPage;
