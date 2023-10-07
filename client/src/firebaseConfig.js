import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// FireBase config
const firebaseConfig = {
  apiKey: "AIzaSyCfO2rdBvQoUMrTZL0fQBGP73apFStWaCM",
  authDomain: "connect-social-media-platform.firebaseapp.com",
  projectId: "connect-social-media-platform",
  storageBucket: "connect-social-media-platform.appspot.com",
  messagingSenderId: "253326007798",
  appId: "1:253326007798:web:9772ad6a4e23e48e91fbd7"
};

initializeApp(firebaseConfig);

//Auth Config
export const auth = getAuth();
