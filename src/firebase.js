import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import toast from 'react-hot-toast';


const firebaseConfig = {
    apiKey: "AIzaSyCST9anWSg0i2vZgrp75RtfMT3xCGYsl2g",
    authDomain: "sandik-voting-app.firebaseapp.com",
    projectId: "sandik-voting-app",
    storageBucket: "sandik-voting-app.appspot.com",
    messagingSenderId: "288467988676",
    appId: "1:288467988676:web:7e7185531b4c17b0c05991"
};

const app = initializeApp(firebaseConfig); // Buraya kadar olan kısım firebaseden gelen kodlar
const auth = getAuth();

// email ve password bilgisini alacağımız fonksiyon
export const register = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        toast.error(error.message);
    }
}

export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        return user
    } catch (error) {
        toast.error(error.message);
    }

}

export const logout = async () => {
    try {
        await signOut(auth)
        return true
    } catch (error) {
        toast.error(error.message);
    }

}
export default app