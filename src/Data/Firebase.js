import firebase from 'firebase'

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCh1FRp0Si8-ql2AUiseHuNyWqPAQFrW8A",
  authDomain: "clone-29-mar.firebaseapp.com",
  projectId: "clone-29-mar",
  storageBucket: "clone-29-mar.appspot.com",
  messagingSenderId: "541681795522",
  appId: "1:541681795522:web:ce19cd40e38d22cf07d65b",
  measurementId: "G-NP3PC2L1N7"
})

const db = firebase.firestore()
export {db}