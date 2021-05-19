import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBmnALn36dVEw3hmBnDvgqy-cQPCjaWrsQ",
  authDomain: "sound-perception-1dc15.firebaseapp.com",
  projectId: "sound-perception-1dc15",
  storageBucket: "sound-perception-1dc15.appspot.com",
  messagingSenderId: "673853871163",
  appId: "1:673853871163:web:6a7231b6df346b56b1f81e"
};
// Initialize Firebase

  const fireb=firebase.initializeApp(firebaseConfig);
  const db=fireb.firestore();
  const auth=fireb.auth();

  export {db,auth}