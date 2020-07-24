import firebase from 'firebase/app';
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCrgdMoP0LTejAWsPkY7j6qx4eQQAmTv14",
  authDomain: "movie-rating-1ec7c.firebaseapp.com",
  databaseURL: "https://movie-rating-1ec7c.firebaseio.com",
  projectId: "movie-rating-1ec7c",
  storageBucket: "movie-rating-1ec7c.appspot.com",
  messagingSenderId: "44609705608",
  appId: "1:44609705608:web:91e3dce5e37932023e713d",
  measurementId: "G-CQLF4BMB9W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;