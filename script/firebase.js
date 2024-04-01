import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBN_6J_Fqx_EK-kTz960yEV_MO1era2ZSU",
    authDomain: "collaborate-mde.firebaseapp.com",
    projectId: "collaborate-mde",
    storageBucket: "collaborate-mde.appspot.com",
    messagingSenderId: "647020986223",
    appId: "1:647020986223:web:35b2f9425778075cb8f29a"
  };

export const firebaseApp = initializeApp(firebaseConfig);
