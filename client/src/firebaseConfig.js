import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

// FireBase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: "connect-social-media-platform.firebaseapp.com",
  projectId: "connect-social-media-platform",
  storageBucket: "connect-social-media-platform.appspot.com",
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};
 
initializeApp(firebaseConfig);

//get auth, set state persistence
setPersistence(getAuth(), browserLocalPersistence)
.catch((error) => {
  console.error('Error setting authentication state persistence:', error);
})
export const auth = getAuth();