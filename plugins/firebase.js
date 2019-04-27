import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAfCfPkSslya9YpiH71H-hcWlxzqtGKdcs",
  authDomain: "my-site-poccariswet.firebaseapp.com",
  databaseURL: "https://my-site-poccariswet.firebaseio.com",
  projectId: "my-site-poccariswet",
  storageBucket: "my-site-poccariswet.appspot.com",
  messagingSenderId: "1046438060461"
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
