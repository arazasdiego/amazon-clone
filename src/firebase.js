import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAfylZmVvAFrdpPXGdV9am6v63VliQo1M8',
  authDomain: 'clone-af684.firebaseapp.com',
  projectId: 'clone-af684',
  storageBucket: 'clone-af684.appspot.com',
  messagingSenderId: '611045322688',
  appId: '1:611045322688:web:71ddf0c4823c960a0d2225',
  measurementId: 'G-K6N94NRJXK',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
