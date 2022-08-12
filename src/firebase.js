import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc, query, updateDoc,setDoc, arrayUnion, where } from "firebase/firestore";
import toast from 'react-hot-toast';
import Vote from "./pages/Main/Vote";
import { store } from "./store";
import { login as loginHandle, logout as logoutHandle } from "./store/auth/authSlice";
import votes, { setVotes } from "./store/votes";
import comments, { setComments } from "./store/comment";

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
                setVotes
                    (
                        doc.docs.reduce((votes, vote) => [...votes, { ...vote.data()}], [])
                    ))
        });

        

    } else {
        store.dispatch(logoutHandle(user))
    }
})


export const getComments= data=>{
    try{
        onSnapshot(query(collection(db, "comments"),where("voteid","==",data.voteid)), (doc) => {
            store.dispatch(
                setComments
                    (
                        doc.docs.reduce((comments, comment) => [...comments, { ...comment.data()}], [])
                    ))
        });
    }catch(error){
        toast.error(error.message);
    }
}

export const addVote = async data => {
    try {
        const result = await addDoc(collection(db, 'votes'), data)
        return result.id
    } catch (error) {
        toast.error(error.message);
    }
}

export const addComment = async data => {
    try {


        await addDoc(collection(db, "comments"), {
            
                comment: data.comment,
                voteid: data.voteid
                
          });

        } catch (error) {
                 console.log("hata:"+error.message);
                toast.error(error.message);
           }
        
} 



export const deleteVote = async id => {
    try {
        await deleteDoc(doc(db, 'votes', id))
    } catch (error) {
        toast.error(error.message);
    }
}

export default app