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
