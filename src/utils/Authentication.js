import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";

import { firebaseConfig } from "./FirebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const addAuthToDB = async (userAuth) => {
  const docRef = doc(db, "users", userAuth.uid);
  const { displayName, photoURL, email } = userAuth;
  const createdAt = new Date();

  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) {
    setDoc(docRef, {
      displayName: displayName,
      photoURL: photoURL,
      email: email,
      createdAt: createdAt,
    });
  }
};
