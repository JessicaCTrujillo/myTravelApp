import firebase from "firebase/app";
import "firebase/storage";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAYGnQcmGQf1iYzqozzEiRVRQ7lvI-1omw",
  authDomain: "mytravelapp-1553555775757.firebaseapp.com",
  databaseURL: "https://mytravelapp-1553555775757.firebaseio.com",
  projectId: "mytravelapp-1553555775757",
  storageBucket: "mytravelapp-1553555775757.appspot.com",
  messagingSenderId: "447585575957"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
