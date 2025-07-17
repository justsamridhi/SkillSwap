// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoFW8rzt7s0xq_0ZF4wQlG_QFLyXIvgKk",
  authDomain: "skillswap-30254.firebaseapp.com",
  projectId: "skillswap-30254",
  storageBucket: "skillswap-30254.firebasestorage.app",
  messagingSenderId: "147317696119",
  appId: "1:147317696119:web:f5500089a6532d089b8872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);