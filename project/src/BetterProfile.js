import React, {Component} from 'react';
import './App.css';
import Navbar from './navBar';
import { Container, Row, Col, Image, Jumbotron, Button } from 'react-bootstrap';
import 'holderjs';

class BetterProfile extends Component{
  constructor() {
    super();
    this.state = {};
  }
  render(){
    return(
      <Container>
      <Jumbotron>
        <h1>Gamer Johnson</h1>
        <Row>
          <Col xs={6} md={4}>
            <a href="/"/><img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" alt="holder.js/300x200"/>
          </Col>
        </Row>
        <p>
          Cras justo odio, dapibus ac facilis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet.
        </p>
        <p>
          <Button>Don't click me</Button>
        </p>
      </Jumbotron>
      </Container>
    )
  }
}

export default BetterProfile;
