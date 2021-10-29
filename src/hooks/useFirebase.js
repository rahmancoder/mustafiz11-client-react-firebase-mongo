import initializeFirebaseAuthentication from '../Firebase/Firebase.init';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,

} from "firebase/auth";

import { useState, useEffect } from 'react';


initializeFirebaseAuthentication();


const useFirebase = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)

    // const handleGoogleLogin = () => {
    //     signInWithPopup(auth, provider)
    //         .then((result) => {
    //             setUser(result.user);

    //             // console.log(result.user);
    //             setError("");
    //         })
    //         .catch((error) => setError(error.message));
    // };

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, provider)
            .finally(() => { setLoading(false) });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // const uid = user.uid;
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((err) => {
                console.log(err);
            });
    };


    return {
        signInUsingGoogle,
        // handleGoogleLogin,
        user,
        loading,
        handleLogout,
    };
}

export default useFirebase;