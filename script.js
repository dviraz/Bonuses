// This file contains the JavaScript code for the commission calculator application.
// It handles user interactions, calculations for commissions, and integrates with Firebase for data storage and retrieval.

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, deleteDoc, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAafirKnsTVHXkrTHTdnQhuOh55Nuyngss",
    authDomain: "bonuses-d9b8f.firebaseapp.com",
    projectId: "bonuses-d9b8f",
    storageBucket: "bonuses-d9b8f.firebasestorage.app",
    messagingSenderId: "875104313918",
    appId: "1:875104313918:web:400616782fb7b8c9dd676f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Global variables
let userId;

// Authentication
onAuthStateChanged(auth, (user) => {
    if (user) {
        userId = user.uid;
        console.log("User signed in:", userId);
    } else {
        console.log("User signed out. Signing in anonymously.");
        signInAnonymously(auth).catch((error) => {
            console.error("Error signing in:", error);
        });
    }
});

// Function to calculate commissions
function calculateCommissions() {
    // Logic for commission calculations based on user input
}

// Event listeners for user interactions

// Function to save profile data
async function saveProfile(profileData) {
    const profileDocRef = doc(db, `users/${userId}/profiles`, profileData.name);
    await setDoc(profileDocRef, profileData);
}

// Function to load profiles
async function loadProfiles() {
    const profilesColRef = collection(db, `users/${userId}/profiles`);
    const snapshot = await getDocs(profilesColRef);
    snapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
}

// Additional functions for handling user input and Firebase interactions can be added here.