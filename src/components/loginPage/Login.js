import React, { useState } from "react";
import  './loginPage.css'
import './test.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <div>
        <div className="auth-form-container">
          <h2>Login</h2>
          <form className="login-form">
            <label htmlFor="email">Email:</label>
            <input
              value={email}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <label htmlFor="password">Password:</label>
            <input
              value={pass}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
            <button type="submit">Log In</button>
          </form>
          <button className="link-btn">
            Don't have an account? Register here.
          </button>
        </div>
        );
      </div>
      );
    </div>
  // )
  )
}


export default Login;
