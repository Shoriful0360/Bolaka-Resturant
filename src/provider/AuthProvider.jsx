import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const[user,setUser]=useState()
    const provider = new GoogleAuthProvider();
    
    // login with google
const loginWithGoogle=()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
}




// login email and password
const loginEmail=(email,password)=>{
    setLoading(true)
return signInWithEmailAndPassword(auth,email,password)
}

// create user
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}



// update profile
const updateUserProfile=(name,photo)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
        displayName:name,photoURL:photo
    })
}



// logout user
const logoutUser=()=>{
    
    return signOut(auth)
}

// onauth change 
useEffect(()=>{
const unSubscribe=onAuthStateChanged(auth,currentUser=>{
setLoading(false)
setUser(currentUser) 
})

return ()=>{
    unSubscribe()
  } 

},[])

const authInfo={
    loginWithGoogle,loginEmail,createUser,user,logoutUser,updateUserProfile
}

    return (
        <div>
           <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;