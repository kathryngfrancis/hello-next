// src/firebase.js
"use server";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,

  authDomain: "test-firestore-a9bee.firebaseapp.com",

  projectId: "test-firestore-a9bee",

  storageBucket: "test-firestore-a9bee.firebasestorage.app",

  messagingSenderId: "210537897010",

  appId: "1:210537897010:web:ab3c180fa5aec75fbcb02b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function addHit() {
  try {
    const counterRef = doc(db, "analytics", "hitCounter");
    const counterSnap = await getDoc(counterRef);

    // Step 1: Increment counter
    if (counterSnap.exists()) {
      await updateDoc(counterRef, {
        count: increment(1),
      });
    } else {
      await setDoc(counterRef, { count: 1 });
    }

    // Step 2: Log individual hit with timestamp
    const logRef = collection(db, "analytics/hitCounter/hitLogs");
    await addDoc(logRef, {
      timestamp: serverTimestamp(),
    });

    return "done";
  } catch (err) {
    return "error";
  }
}

async function addGuess(guess, isCorrect) {
  try {
    // Log guess with timestamp
    const logRef = collection(db, "guesses");
    await addDoc(logRef, {
      timestamp: serverTimestamp(),
      guess: guess,
    });
    return isCorrect;
  } catch (err) {
    return "error";
  }
}

export { addHit, addGuess };
