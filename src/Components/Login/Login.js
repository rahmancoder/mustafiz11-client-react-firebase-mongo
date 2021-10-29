import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle,
        user,
        //     handleResetPassword,
        //     verifyEmail,
        //     setUserName,
        //     registerNewUser,
        //     processLogin,
        // handleGoogleSignIn,
        logOut
    } = useFirebase();


    // const handleGoogleSignIn = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);


    //             const { displayName, email, photoURL } = result.user;
    //             const loggedInUser = {
    //                 name: displayName,
    //                 email: email,
    //                 photo: photoURL
    //             };
    //             setUser(loggedInUser);
    //         })
    //         .catch(error => {
    //             console.log(error.message);
    //         })
    // }



    return (
        <div>


        </div>
    );
};

export default Login;