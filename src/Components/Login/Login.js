import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./Login.css";

const Login = () => {
    const {handleSubmit, isLogin, handleEmailChange, handlePasswordChange, handleNameChange, checkedIsLogin, signInUsingGoogle, handleResetPass, error, setUser} = useAuth();
    const location = useLocation();
    const history = useHistory();
    // handle redirecting using google login
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user);
            history.push(location.state?.from || '/home');
          }).catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }

    return (
        <div className="login bg-success my-5">
            <form onSubmit={handleSubmit}>
                <h1 className="text-danger text-center text-bold-700">Please {isLogin ? "Login" : "Register"}</h1>
                {
                    !isLogin && <input onChange={handleNameChange} type="text" placeholder="Enter Your Name" />
                }
                <br />
                <input onChange={handleEmailChange} type="email" placeholder="Enter Your Email" /> <br />
                <input onChange={handlePasswordChange} type="password" placeholder="Type Your Password" /> <br />
                <input onChange={checkedIsLogin} type="checkbox" id="registered" value="registered"/>
                <label htmlFor="registered"> Already Registered ?</label><br/>
                <p>{error}</p>
                <div className="text-center">
                <button type="submit"  className="btn__login">{isLogin ? 'Login' : 'Register'}</button> <br />
                {
                    isLogin && <button type="submit" onClick={handleResetPass} className="btn__login">Forget Password</button>
                }
                </div>
            </form>
            <button onClick={handleGoogleSignIn} className="btn__login">Google Sign In</button>
        </div>
    );
};

export default Login;