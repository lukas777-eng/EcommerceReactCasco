import firebase from 'firebase/app'
import '@firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyB4r5-eVyeqCdpHurOwsJPyuUdFQoIWTXk",
    authDomain: "ecommerce-casco.firebaseapp.com",
    projectId: "ecommerce-casco",
    storageBucket: "ecommerce-casco.appspot.com",
    messagingSenderId: "1057646630777",
    appId: "1:1057646630777:web:36667f7bf49ca49cc801a8"
});

export const getFirebase = () => {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
}