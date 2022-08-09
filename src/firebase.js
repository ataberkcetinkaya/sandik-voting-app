import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import toast from 'react-hot-toast';
import { store } from "./store";
import { login as loginHandle, logout as logoutHandle } from "./store/auth/authSlice";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID
};

const app = initializeApp(firebaseConfig); // Buraya kadar olan kısım firebaseden gelen kodlar
export const auth = getAuth();
const user = auth.currentUser;  

  

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

export const update = async data => {
try {
    await updateProfile(auth.currentUser, data)
    toast.success('Kullanıcı İsmi Güncellendi')
    return true
} catch (error) {
    toast.error(error.message);
}    
}

onAuthStateChanged(auth, (user) => {
    if (user) {


        store.dispatch(loginHandle({
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            uid: user.uid
        }))
    } else {
        store.dispatch(logoutHandle(user))
    }
})
export default app