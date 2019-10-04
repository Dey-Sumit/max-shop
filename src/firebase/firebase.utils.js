import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBj8euKrEP5nDJfF87G9FMFJGA2GBnI5AU",
  authDomain: "max-store-333.firebaseapp.com",
  databaseURL: "https://max-store-333.firebaseio.com",
  projectId: "max-store-333",
  storageBucket: "",
  messagingSenderId: "662499172582",
  appId: "1:662499172582:web:1090f1860e59948881db27",
  measurementId: "G-6KELPMYD43"
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
  //if userAuth does not exist(==null)(if not signed in),exit from the function
  if (!userAuth) return;

  //,make a query to firestore if it already exist
  const userRef = firestore.doc('users/' + userAuth.uid); //***
  const snapShot = await userRef.get();
  //if the user does not exist create a new one
  if (!snapShot.exists) {
    const {
      displayName,
      email
    } = userAuth;
    const createdAt = new Date(); //current time when the data is created

    try {
      //create data using set()
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }
  //we can also make use of the userRef ,so return it
  return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//access(create object) to the GoogleAuthProvider class from auth library
const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;