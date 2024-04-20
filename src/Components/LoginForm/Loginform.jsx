import React from "react"
import "./Loginform2.css"
import {PiUser, PiPasswordFill} from "react-icons/pi";

const Loginform = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                    <PiUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <PiPasswordFill className='icon'/>
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="signup-link">
                    <p>Not a member? <a href="#">Signup now</a></p>
                </div>
            </form> 
        </div>
    )   
}
export default Loginform;

