import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyCY75wBJRgO0TNkdriqDJkWDJvfjZBL_hM",
    authDomain: "clone-93a56.firebaseapp.com",
    projectId: "clone-93a56",
    storageBucket: "clone-93a56.appspot.com",
    messagingSenderId: "8818825325",
    appId: "1:8818825325:web:b443dd75dcea3ce71a8764",
    measurementId: "G-LPEKDP4B88"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
