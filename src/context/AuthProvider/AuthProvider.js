import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, onAuthStateChanged,createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const googleProvider = new GoogleAuthProvider()
    
    const createUserEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])
    
    const authInfo = {
        user,
        loading,
        createUserEmailPassword,
        logInWithEmailPassword,
        logInWithGoogle,
        logOut
    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;