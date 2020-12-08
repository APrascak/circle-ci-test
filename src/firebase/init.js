import 'firebase/firestore'
import firebase from 'firebase/app'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBxgpZSgwB_IksFHkJbHWKEm77V6hCyvus",
    authDomain: "uf-ase.firebaseapp.com",
    databaseURL: "https://uf-ase.firebaseio.com",
    projectId: "uf-ase",
    storageBucket: "uf-ase.appspot.com",
    messagingSenderId: "213008458791",
    appId: "1:213008458791:web:e1a85272d6ec5788299a02",
    measurementId: "G-ZM6ZDBSNQY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()