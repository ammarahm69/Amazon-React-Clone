import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYfg9jZGh63q8vO2dFqoHG5Rx5cgu9NR4",
  authDomain: "air-bnb-clone-d6e9c.firebaseapp.com",
  projectId: "air-bnb-clone-d6e9c",
  storageBucket: "air-bnb-clone-d6e9c.appspot.com",
  messagingSenderId: "733438746574",
  appId: "1:733438746574:web:062444944ac164ed07159f",
  measurementId: "G-67FW7V95NY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user.displayName);
      // Handle user information here
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };