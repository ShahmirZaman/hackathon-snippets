import React from 'react'
import './login.css'

export default function Login() {

    
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Zamsocial</h3>
            <span className="loginDesc">
                Connect with friends and the world around you on Zamsocial.
            </span>
        </div>
        <div className="loginRight">
            <form className="loginBox">
                <input placeholder="Email" type='email' required className='loginInput'/>
                <input placeholder="Password" type='password' required minLength={6} className='loginInput'/>
                <button className="loginButton">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRegisterButton">Create a New Account</button>
            </form>
        </div>
      </div>
    </div>
  )
}
