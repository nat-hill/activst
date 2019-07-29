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
