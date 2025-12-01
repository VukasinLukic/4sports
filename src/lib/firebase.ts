// Firebase Configuration for 4sports
// This file contains the Firebase setup for contact form and future features

import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import { getFirestore, type Firestore } from 'firebase/firestore';
import { getFunctions, type Functions } from 'firebase/functions';

// Firebase configuration
// TODO: Replace these values with your actual Firebase project credentials
// You can find these in: Firebase Console -> Project Settings -> General -> Your apps
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "YOUR_API_KEY_HERE",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "YOUR_SENDER_ID",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "YOUR_APP_ID",
};

// Initialize Firebase
let app: FirebaseApp;
let db: Firestore;
let functions: Functions;

try {
  // Check if Firebase is already initialized
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    functions = getFunctions(app);

    console.log('✅ Firebase initialized successfully');
  } else {
    app = getApps()[0];
    db = getFirestore(app);
    functions = getFunctions(app);
  }
} catch (error) {
  console.error('❌ Firebase initialization error:', error);
  throw error;
}

export { app, db, functions };
export default app;
