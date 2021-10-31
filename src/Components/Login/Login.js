import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    // const { handleGoogleLogin,
    //     user,
    //     //     handleResetPassword,
    //     //     verifyEmail,
    //     //     setUserName,
    //     //     registerNewUser,
    //     //     processLogin,
    //     // handleGoogleSignIn,
    //     handleLogout
    // } = useFirebase();

    const {
        signInUsingGoogle,
        // handleGoogleLogin,
        user,
        handleLogout
    } = useAuth();


    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }


    return (
        <div>
            {!user.email ?
                <div>
                    <i class="fas fa-sign-in-alt"></i>  <button onClick={handleGoogleLogin}>Google Sign In</button>
                    {/* <button onClick={handleGithubSignIn}>Github Sign In</button> */}
                    {/* <button onClick={handleFacebookSignIn}>Facebook Sign In</button> */}
                </div> :
                <button onClick={handleLogout}>Sign Out</button>
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