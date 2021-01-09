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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      }) 
    } catch (error) {
        console.log('error creating user', error.message);
    }
  }

  return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();