import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDIgYbAyKa7rhKNkZlndwsMUW6sm0Nr09A",
  authDomain: "cards-game-9c77b.firebaseapp.com",
  projectId: "cards-game-9c77b",
  storageBucket: "cards-game-9c77b.appspot.com",
  messagingSenderId: "534715598546",
  appId: "1:534715598546:web:143c728ec286afa5f48f0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);