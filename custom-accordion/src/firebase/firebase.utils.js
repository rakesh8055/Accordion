import  { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWQZuaygV-PWHOclRlK3hqeDwM_XBjgHE",
    authDomain: "custom-accordion.firebaseapp.com",
    projectId: "custom-accordion",
    storageBucket: "custom-accordion.appspot.com",
    messagingSenderId: "253755513692",
    appId: "1:253755513692:web:485c5330d15d46e8fe7f99",
    measurementId: "G-Y8EW76W4P7"
  };

  const app = initializeApp(config);

  export const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => signInWithPopup(auth, provider);
  
