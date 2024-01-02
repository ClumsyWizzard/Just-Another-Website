import firebase from "firebase/compact/app";
import "firebase/compact/firestore";


const firebaseConfig = {
    apiKey: `${Apikey}`,
    authDomain: "karthicc-1c369.firebaseapp.com",
    projectId: "karthicc-1c369",
    storageBucket: "karthicc-1c369.appspot.com",
    messagingSenderId: "778940733999",
    appId: "1:778940733999:web:113e98d68f0d25007984da",
    measurementId: "G-19FLW6QRS5"
  };

  const app =  firebase.initilizeApp(firebaseConfig);

  export const db = firebase.firestore()