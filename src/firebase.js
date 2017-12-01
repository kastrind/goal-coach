import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB9geY-E5_f2n9gHuNWcGu-jlo98YocZjk",
  authDomain: "goalcoach-e43a1.firebaseapp.com",
  databaseURL: "https://goalcoach-e43a1.firebaseio.com",
  projectId: "goalcoach-e43a1",
  storageBucket: "",
  messagingSenderId: "305107756301"
};

export const firebaseApp = firebase.initializeApp(config);
