import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDevault();
    }

    const register = e => {
        e.preventDevault();
    }
    
    return ( 
        <div className = "login">
            <Link to = "/" >
                 <img className = "login__logo" alt="" src= "/images/calabash2.png" />
            </Link>

            <div className = "login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type = "text" value = {email} 
                    onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type = "password" value = {password} 
                    onChange = {e => setPassword(e.target.value)} />

                    <button type= "submit" onClick = {signIn} className = "login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing in you do not agree to Calabash's conditions of Use and Sale because they don't currently exist, this is just a demo site, if you think it's real you should stop doing drugs while interneting.
                    Please also do not see our Privacy Notice, Cookies Notice or Internet based ads notice because like our dating lives, they also do not exist.
                </p>

                <button type= "submit" onClick = {register} className = "login__registerButton">Create New Calabash Account</button>
            </div>
            
        </div>
    )
}

export default Login
