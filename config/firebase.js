import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCdkcz8JHe6qaZtbfGinHKEPBebyryctSk",
  authDomain: "ynov-react-native-8d54f.firebaseapp.com",
  projectId: "ynov-react-native-8d54f",
  storageBucket: "ynov-react-native-8d54f.appspot.com",
  messagingSenderId: "59308950056",
  appId: "1:59308950056:web:4f0f5437629ed9a611eb1d"
};


const app = initializeApp(firebaseConfig);
export const authentification = getAuth(app);