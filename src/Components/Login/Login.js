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
            {!user.email ?
                <div>
                    <button onClick={signInUsingGoogle}>Google Sign In</button>
                    {/* <button onClick={handleGithubSignIn}>Github Sign In</button> */}
                    {/* <button onClick={handleFacebookSignIn}>Facebook Sign In</button> */}
                </div> :
                <button onClick={logOut}>Sign Out</button>
            }
            <br />


            {
                user.email && <div>
                    <h2>Welcome {user.name}</h2>
                    <p>Your Login Email is: {user.email}</p>
                    <img src={user.photo} alt="" />
                </div>
            }

        </div>
    );
};

export default Login;