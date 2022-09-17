import firebase from "firebase";

// import firebase from "firebase/compat/app";

// import { firebase } from "@firebase/app";
// import { initializeApp, getApps } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtC4P8LddtPyqkLBxMDwOB1ii4q_ji_kc",
  authDomain: "imdb-4ce2a.firebaseapp.com",
  projectId: "imdb-4ce2a",
  storageBucket: "imdb-4ce2a.appspot.com",
  messagingSenderId: "737437253711",
  appId: "1:737437253711:web:6c4f634251eda699bd6a3a",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// const app = initializeApp(firebaseConfig);

// const db = getDatabase(app);

// export default db;
