// Import the functions you need from the SDKs you need
import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth} from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeJSxaBcJvvbh6YjV37CZc2c6-NvW-tbU",
    authDomain: "netflix-clone-cs-7b89a.firebaseapp.com",
    projectId: "netflix-clone-cs-7b89a",
    storageBucket: "netflix-clone-cs-7b89a.appspot.com",
    messagingSenderId: "957975714199",
    appId: "1:957975714199:web:c451767782896c86814cd2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth();

export default app
export { auth, db }
