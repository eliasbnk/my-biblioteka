import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const config = {
  apiKey: 'AIzaSyBXvzE2Kx6Dbx5mYqParyReOPYC10uC7F8',
  authDomain: 'my-biblioteka.firebaseapp.com',
  projectId: 'my-biblioteka',
  storageBucket: 'my-biblioteka.appspot.com',
  messagingSenderId: '480720702327',
  appId: '1:480720702327:web:d3e231f408186a082c6f72',
};

export const firestore = firebase.firestore;

export const fire = firebase.initializeApp(config);

export const db = fire.firestore();
