import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, child, query, orderByKey, limitToLast } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDHbJBf31aCwILQhxlGr-WQxiIAVySnWOI",
  authDomain: "handtalk-b4705.firebaseapp.com",
  databaseURL: "https://handtalk-b4705-default-rtdb.firebaseio.com",
  projectId: "handtalk-b4705",
  storageBucket: "handtalk-b4705.appspot.com",
  messagingSenderId: "436378470850",
  appId: "1:436378470850:web:1cdebe664045fdddaeee5b",
  measurementId: "G-TV1FPN1H03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore service
const database = getDatabase(app);

export { database };
