import firebase from 'firebase'

var config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
