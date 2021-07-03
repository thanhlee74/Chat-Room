import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCIEyIoyKBpsD6C0p4-FG1Ii0tOb97ML0w",
    authDomain: "chat-romm.firebaseapp.com",
    projectId: "chat-romm",
    storageBucket: "chat-romm.appspot.com",
    messagingSenderId: "310346537501",
    appId: "1:310346537501:web:2c09047658e69bef69c4f4",
    measurementId: "G-6MY5WR6L9K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth =firebase.auth();
  const db =firebase.firestore();

auth.useEmulator('http://localhost:9099')
if(window.location.hostname==='localhost'){
  db.useEmulator('localhost','8080')
}

  export {db, auth };
  export default firebase;