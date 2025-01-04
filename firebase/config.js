// firebase/config.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDXvfT1XtUs4Kj7VM7zQCt9Zc-w9c1Rp9Y",
  authDomain: "trekkandtravels-website.firebaseapp.com",
  databaseURL: "https://trekkandtravels-website-default-rtdb.firebaseio.com",
  projectId: "trekkandtravels-website",
  storageBucket: "trekkandtravels-website.appspot.com",
  messagingSenderId: "1051910823738",
  appId: "1:1051910823738:web:6f9a4c10d0b8c97c5b56a6"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
export default app;