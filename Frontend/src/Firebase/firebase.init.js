// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-UqPH7YitcGFJ36CLDNXDvuc3frHfioM",
  authDomain: "baccha-project.firebaseapp.com",
  projectId: "baccha-project",
  storageBucket: "baccha-project.firebasestorage.app",
  messagingSenderId: "449378164997",
  appId: "1:449378164997:web:9e00e40b26acfce52c976c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)