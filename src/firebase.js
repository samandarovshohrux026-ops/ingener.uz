import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// O'zingizning haqiqiy Firebase sozlamalaringizni shu yerga kiritishingiz kerak bo'ladi
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

console.log("Firebase initializing with Project ID:", firebaseConfig.projectId);

if (!firebaseConfig.apiKey) {
    console.error("CRITICAL: Firebase API Key is missing! Check .env.local file.");
}

export let app;
export let auth;
export let db;

try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    console.log("Firebase initialized successfully!");
} catch (error) {
    console.error("Firebase initialization failed:", error);
}
