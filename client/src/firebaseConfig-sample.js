import { initializeApp } from "firebase/app";

// Enter your firebase configuration credentials
// You can get your firebase config credentials by signing into firebase and creating a new authentication project.
const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_authDomain",
  projectId: "your_projectId",
  storageBucket: "your_storageBucket",
  messagingSenderId: "your_messagingSenderId",
  appId: "your_appId"
};

//initialise Firebase in app
initializeApp(firebaseConfig);
