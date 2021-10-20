import React from 'react';

const SignUp = () => {
    return (
        <div className="login bg-info">
        <form onSubmit={handleSubmit}>
            <h1 className="font-bold text-2xl text-center text-indigo-900">Please {isLogin ? "Login" : "Register"}</h1>
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

export default SignUp;