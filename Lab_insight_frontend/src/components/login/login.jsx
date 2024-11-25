import React,{useState, useContext} from "react";
// import {LoginDoctorData} from "../data/LoginDoctorData";
import {Link, useNavigate} from "react-router-dom";
// import {UserContext} from "../App";
import "./login.css"

function Login() {
   
      // JSX code for login form
      const renderForm = (
    
        <div class="container789">
	<div class="screen789">
		<div class="screen__content">
			<form class="login">
				<div class="login__field">
					<i class="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder="User name"/>
				</div>
				<div class="login__field">
					<i class="login__icon fas fa-lock"></i>
					<input type="password" class="login__input" placeholder="Password"/>
				</div>
				<Link to="/dashboard" class="button login__submit">
					<span class="button__text">Log In</span>
					<i class="button__icon fas fa-chevron-right"></i>
				</Link>				
			</form>
			{/* <div class="social-login">
				<h3>log </h3>
				<div class="social-icons">
					<a href="#" class="social-login__icon fab fa-instagram"></a>
					<a href="#" class="social-login__icon fab fa-facebook"></a>
					<a href="#" class="social-login__icon fab fa-twitter"></a>
				</div>
			</div> */}
		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape4"></span>
			<span class="screen__background__shape screen__background__shape3"></span>		
			<span class="screen__background__shape screen__background__shape2"></span>
			<span class="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
      );
    
      return (
    
        <div className="app">
          {renderForm}
        </div>
          
        
      );
}

export default Login;