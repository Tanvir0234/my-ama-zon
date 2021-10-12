import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";

import initializeAutenthication from "../Firebase/Firebase.init"


initializeAutenthication();

const useFirebase =()=>{

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user,setUser]=useState({});

    const handleGoogleSignIn =()=>{
       return signInWithPopup(auth, googleProvider) //doing user experince better
        
    }

    const logOut=()=>{
        signOut(auth).then(() => {
            setUser({})
          })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } 
          });
    },[])
return {
    handleGoogleSignIn,
    user,
    logOut,

}

}

export default useFirebase;