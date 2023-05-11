import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCArt1HEX2c3HfDmBf-SGHVWm-Lv1VWiDY",
    authDomain: "login-auth-b8f11.firebaseapp.com",
    projectId: "login-auth-b8f11",
    storageBucket: "login-auth-b8f11.appspot.com",
    messagingSenderId: "648053090905",
    appId: "1:648053090905:web:32b9d7454d8101b3cd9f48"
  };

 const app=firebase.initializeApp(firebaseConfig)

 export const db=app.firestore()

 export default app