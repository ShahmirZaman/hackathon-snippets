import React, { useRef } from 'react'
import './signup.css'
export default function Signup() {
  const username = useRef()  
  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">Zamsocial</h3>
        <span className="loginDesc">
          Connect with friends and the world around you on Zamsocial.
        </span>
      </div>
      <div className="loginRight">
        <form className="loginBox">
          <input
            placeholder="Username"
            // ref={username}
            required
            type="text"
            className="loginInput"
          />
          <input
            placeholder="Email"
            // ref={email}
            required
            type="email"
            className="loginInput"
          />
          <input
            placeholder="Password"
            // ref={password}
            required
            type="password"
            minLength={"6"}
            className="loginInput"
          />
          <input
            placeholder="Password Again"
            // ref={passwordAgain}
            required
            type="password"
            className="loginInput"
          />
          <button className="loginButton" type="submit">
            Sign Up
          </button>
          <button className="loginRegisterButton">Log into Account</button>
        </form>
      </div>
    </div>
  </div>
  )
}
