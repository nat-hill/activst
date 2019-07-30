<<<<<<< HEAD
import firebase from './Firestore';
import react from 'React';

getDocuments = db =>{
  let protestRef = db.collection('protest');
  let getDoc = protestRef.get()
    .then(doc => {
      if (!doc.exists) {
        console.log('No such document');
      } else {
        console.log('Document data:', doc.data());
      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    })
    return getDoc
}

getDocuments(protest)
=======
import React from 'react';
import firebase from './Firestore';
import Protest from './protest';

getDocument = userRef => {
  let getDoc = userRef.get()
  .then(doc => {
    if (!doc.exists){
      console.log('No document');
    } else {
      console.log('Document data:', doc.data());
    }
  })
  .catch(err => {
    console.log('Error getting document', err);
  });

return getDoc;
}
>>>>>>> 1d944a15cf209fcfcc5d9c803a07b860e81d02ce
