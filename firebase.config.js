import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import {getApp, getApps, initializeApp} from 'firebase/app';
import {getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB0TjNJJ7D8gpBngionbAlTMUVWG3AuvbI",
    authDomain: "mvc-app-21187.firebaseapp.com",
    databaseURL: "https://mvc-app-21187-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mvc-app-21187",
    storageBucket: "mvc-app-21187.appspot.com",
    messagingSenderId: "857664969040",
    appId: "1:857664969040:web:dd2a6fd0f43ca145ad7455"
  };

  const app = getApps.apply.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage };