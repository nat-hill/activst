import React, { Component } from 'react';
import firebase from './Firestore';
import Navbar from './navBar';
import { Container, Jumbotron } from 'react-bootstrap';

class ProtestDocument extends Component {
  constructor(props) {
    super(props);
    this.state = { protestname: '', description: '', location: '', time: '', protest: null, id: this.props.match.params.handle };
  }
  componentDidMount() {
    const { handle } = this.props.match.params;

    fetch(`https://localhost:3000/protest/${handle}`)
      .then((protest) => {
        this.setState(() => ({ protest }))
      })
  }
  componentWillMount() {
    const db = firebase.firestore();
    const protestRef = db.collection("protest");
    protestRef.doc(this.state.id).onSnapshot(docSnapshot => {
      this.setState({ protestname: docSnapshot.data().protestname });
      this.setState({ description: docSnapshot.data().description });
      this.setState({ location: docSnapshot.data().location });
      this.setState({ time: docSnapshot.data().time });
    })

  }
  render() {
    return (
      <div class='protestHeader'>
        <Navbar />
        <Container>
          <Jumbotron>
            <h1>{this.state.protestname}</h1>
            <p>{this.state.description}</p>
            <p>{this.state.location}</p>
            <p>{this.state.time}</p>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default ProtestDocument;
