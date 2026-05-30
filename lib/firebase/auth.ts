import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase/config";

const googleProvider = new GoogleAuthProvider();

export const signUpWithEmail = async (email: string, password: string) => {
  const auth = getFirebaseAuth();
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(cred.user);
  return cred;
};

export const loginWithEmail = (email: string, password: string) => signInWithEmailAndPassword(getFirebaseAuth(), email, password);

export const loginWithGoogle = () => signInWithPopup(getFirebaseAuth(), googleProvider);

export const requestPasswordReset = (email: string) => sendPasswordResetEmail(getFirebaseAuth(), email);

export const logout = () => signOut(getFirebaseAuth());
