// get protest uid from clicking on link -> implement this code
// import firebase from './Firestore';
// import React, {Component} from 'react';
//
// class ProtestName extends Component{
//   constructor(){
//     super();
//     this.state = {currentProtest: null, protestname:''};
//   }
//   componentWillMount(){
//     firebase.auth().onAuthStateChanged(protest => {
//       if (protest) {
//         this.setState({
//           currentProtest: protest
//         });
//         const db = firebase.firestore();
//         const protestRef = db.collection("protest");
//         console.log(protest.uid);
//         let observer = protestRef.doc(protest.uid).onSnapshot(docSnapshot => {
//           console.log("Received doc snapshot: ${docSnapshot}");
//           console.log(docSnapshot.data());
//           this.setState({protestname:docSnapshot.data().protestname});
//         }, err => {
//           console.log('Encountered error: ${err}');
//         });
//       }
//     })
//   }
//
//   render(){
//     console.log(this.state.protestname);
//     return(
//       <div>
//       {this.state.protestname}
//       </div>
//       );
//     }
//   }
//
// export default ProtestName;
