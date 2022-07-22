import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBHuAA3J7VfuT3AY8oJEHodUmonGe0DLRY",
	authDomain: "eazyloan-259d0.firebaseapp.com",
	projectId: "eazyloan-259d0",
	storageBucket: "eazyloan-259d0.appspot.com",
	messagingSenderId: "61038393926",
	appId: "1:61038393926:web:9c54d96576bd587eb26847",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { provider, auth };
export default getFirestore();
