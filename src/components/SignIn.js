import React, {Component}from 'react';
import './SignUp.css';

class SignIn extends Component {
	constructor() {
		super()
		this.state = {

			email: "",
			password:""
		}
	}
	handleChange =(event) => {
		const {name,value} = event.target
		this.setState({[name]:value})
	}

	onsSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body:JSON.stringify({
				email:this.state.email,
				password:this.state.password
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home')
			}
		})
		
	}

	render() {

		return( 

			<div> 
			<h1 className = "ml6 bg red"> My Network App</h1> 
			<article className ="br3 center mw6 shadow-5 mv4">
			<fieldset> 
			<h2>Sign In</h2> 
			<form onSubmit = {this.handleSubmit}>
			  	<input className = "ma2"
			  	type = "email"
			  	value = {this.state.email}
			  	name = "email"
			  	placeholder= "Email"
			  	onChange = {this.handleChange}
			  	/>
			  	<br />

			  	<input className = "ma2"
			  	type = "text"
			  	value = {this.state.password}
			  	name = "password"
			  	placeholder= "password"
			  	onChange = {this.handleChange}
			  	/>
			  	  </form> 
			  	 </fieldset> 
			  	 </article> 

			  	 <input className = "signinbutton pointer" 
      				type="submit" 
      				value="SignIn"
      				onClick={this.onsSubmitSignIn}
      				/>

			  		
			  	<div className = "lh-copy mt3">
      				<a href = "#0" className="f15 link dim db"
      				onClick={() =>this.props.onRouteChange('register')}>Register</a> 
      				</div> 
      				
			 
			  </div> 
			)
	}
}

export default SignIn