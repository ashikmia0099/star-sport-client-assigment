import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged,GoogleAuthProvider,signInWithPopup, signOut, updateProfile   } from "firebase/auth";


export const AuthContext = createContext();

const provider = new GoogleAuthProvider()

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();
    const [error, setError] = useState({});
    const [allcardData, setallcardData] = useState([]);
    const [mycomponent, setmycomponent] = useState([]);



    // set ll card tata in setallcardData

    useEffect(() => {


        fetch('http://localhost:5000/cards')
        .then((res) => res.json())
        .then(data =>{
            console.log(data)
            setallcardData(data);
        })

    },[])





    // create user in email and password

    const SignUpUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login user

    const SignInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sign in 

    const signInwithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    // Logout

    const SignOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }



    // update profile

    const updateUserProfile = (updatedData) =>{
        
        return updateProfile(auth.currentUser, updatedData);

    }

    // Observe use effect

    useEffect(() => {
        
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
               console.log('state capture', currentUser)
          setLoading(false);
        })
        return () =>{
            unsubscribe()
        }
        


    },[])



    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        SignUpUser,
        SignInUser,
        signInwithGoogle,
        SignOutUser,
        error,
        setError,
        updateUserProfile,
        allcardData, 
        setallcardData,
        mycomponent, 
        setmycomponent,
        
    }

    return (
       <AuthContext.Provider value={userInfo}>

            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;