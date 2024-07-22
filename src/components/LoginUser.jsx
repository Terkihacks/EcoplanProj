import React from 'react'
import '../styles/frontend.css';
const LoginUser = () => {
  return (

      <div className="login-container">
        <h2>Login</h2>
        <form method="POST" action="login"> 
            <div >
                <label>Email address</label>
                <input type="text" name="Email" placeholder="Enter your email" required/>
            </div>
            <div >
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter your password" required/>
            </div>
            <button type="submit" >Login →</button>
        </form> 
        <p>Don't have an account?<a href="">Sign Up</a> here.</p> 
    </div>

  )
}

export default LoginUser
