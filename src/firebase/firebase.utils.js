import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCEy2mDTF1lCWagM0ITB-CPBdU421irvQU",
  authDomain: "ecommerce-91180.firebaseapp.com",
  projectId: "ecommerce-91180",
  storageBucket: "ecommerce-91180.appspot.com",
  messagingSenderId: "151180100754",
  appId: "1:151180100754:web:a1bb82d567c35fc1d0d24b",
  measurementId: "G-42LG91MDEP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;