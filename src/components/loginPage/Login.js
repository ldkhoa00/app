import React, { useState } from "react";
import  './loginPage.css'
import './test.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
       <header class="login">
      <div class="container">
        <div class="login-body">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-5">
              <div class="login-img">
                <img src="imgs/login.jpg" alt="" class="img-fluid" />
              </div>
            </div>
            <div class="col-md-12">
              <div class="login-form">
                <h3>SIGN IN</h3>
                <form action="">
                  <div class="mail-input">
                    <div class="input-group flex-nowrap">
                      <span class="input-group-text" id="addon-wrapping"
                        ><i class="fa-solid fa-envelope"></i
                      ></span>
                      <input
                        id="signInEmail"
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                  <div class="password-input">
                    <div class="input-group flex-nowrap">
                      <span class="input-group-text" id="addon-wrapping"
                        ><i class="fa-solid fa-lock"></i
                      ></span>
                      <input
                        id="signInPassword"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        aria-label="Username"
                        aria-describedby="addon-wrapping"
                      />
                    </div>
                  </div>
                  <p id="loginError" class="alert text-danger d-none">
                    Your email or password is wrong or cant be empty
                  </p>
                  <a id="signInBtn" class="submit d-block m-auto mb-5">
                    Login
                  </a>
                </form>
                <a href="pages/signup.html">Do not have an account ? Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
)
}


export default Login;
