// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXCOg5n1ajvPeTssQQ-FHBtV3EEsFLUUk",
    authDomain: "mylife-c4638.firebaseapp.com",
    projectId: "mylife-c4638",
    appId: "1:324497415765:web:b224276d45ecd4d3e87edc",
};

// Initialize Firebase
const APP = initializeApp(firebaseConfig);
// Initialize Authentication and get a reference to the service
const AUTH = getAuth(APP);
// Initialize Cloud Firestore and get a reference to the service
const DB = getFirestore(APP);

export {APP, AUTH, DB}