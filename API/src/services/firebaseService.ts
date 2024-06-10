import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD4f1m9vRoe0o0WbKDC3l4b496lHQcgs8w",
  authDomain: "api-handtalk-5a459.firebaseapp.com",
  projectId: "api-handtalk-5a459",
  storageBucket: "api-handtalk-5a459.appspot.com",
  messagingSenderId: "399915628166",
  appId: "1:399915628166:web:d3ccf817c7fac17a3e8307",
  measurementId: "G-NY7C72E67D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firestore service
const firestore = getFirestore(app);

export { firestore };
