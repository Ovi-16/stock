import React from "react"
import "./Loginform.css"
import {PiUser, PiPasswordFill} from "react-icons/pi";

const Loginform = () => {
    return (
        <div className="login-form">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" /><PiUser />
                <input type="password" placeholder="Password" /><PiPasswordFill />
                <button type="submit">Login</button>
            </form> 
        </div>
    )   
}
export default Loginform;

