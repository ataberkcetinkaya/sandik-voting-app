import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc, query, where, getDoc } from "firebase/firestore";
import toast, { useToasterStore } from 'react-hot-toast';
import { store } from "./store";
import { login as loginHandle, logout as logoutHandle } from "./store/auth/authSlice";
import { getVotes } from "./store/vote/voteSlice";
import { setComments } from "./store/comment";

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyAyh8h7-OVu-LX9_e6YxfQVz5UlfNOHNYs",
    authDomain: "urun-islemleri-2b746.firebaseapp.com",
    databaseURL: "https://urun-islemleri-2b746-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "urun-islemleri-2b746",
    storageBucket: "urun-islemleri-2b746.appspot.com",
    messagingSenderId: "68335948387",
    appId: "1:68335948387:web:4dd9de090ef566753d1e56"
};

const app = initializeApp(firebaseConfig); // Buraya kadar olan kısım firebaseden gelen kodlar
export const auth = getAuth();
export const db = getFirestore(app);
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
        onSnapshot(query(collection(db, "votes")), (doc) => {
            store.dispatch(
                getVotes
                    (
                        doc.docs.reduce((votes, vote) => [...votes, { ...vote.data() }], [])
                    ))
        });
    } else {
        store.dispatch(logoutHandle(user))
    }
})

export const addVote = async data => {
    try {
        const result = await addDoc(collection(db, 'votes'), data)
        // Anket eklendikten sonra idsini içersine ekleyeceğiz ki değiştirebilelim
        const docRef = doc(db, "votes", result.id);
        await updateDoc(docRef, {
            "id": result.id
        })
        return result.id
    } catch (error) {
        toast.error(error.message);
    }
}

export const addComment = async (data, docId) => {
    try {
        const docRef = doc(db, 'votes', docId);
        await updateDoc(docRef, {
            comments: data
        })
    } catch (error) {
        toast.error(error.message);
    }
}

// export const getComments = async (docId) => {
//     try {
//         const docRef = doc(db, 'votes', docId);
//         const docSnap = await getDoc(docRef);
//         return docSnap.data().comments;
//     } catch (error) {
//         toast.error(error.message);
//     }
// }

// export const selectSide = async data => {
//     try {
//         const docRef = doc(db, "votes", "");
//         // const result = await updateDoc(docRef)
//     } catch (error) {
//         toast.error(error.message);
//     }
// }
