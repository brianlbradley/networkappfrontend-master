import React, {Component}from 'react';
import './SignUp.css';

class SignUp extends Component {
	constructor() {
		super()
		this.state = {
			firstname:'',
			lastname:'',
			company:'',
			phone: '',
			city:'',
			email: '',
			password:'',
			ischecked:false
		}
	}
	handleChange =(event) => {
		const {name,value} = event.target
		this.setState({[name]:value})
	}

    onSubmitRegister = () => {
    	fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body:JSON.stringify({
				firstname:this.state.firstname,
				lastname:this.state.lastname,
				company:this.state.company,
				phone: this.state.phone,
				city: this.state.city,
				email: this.state.email,
				password:this.state.password,
				ischecked:this.state.ischecked
			})
		})
		.then(response => response.json())
		.then(user => {
			if (user.id) {
				this.props.loadUser(user)
				this.props.onRouteChange('home')
			}
		})
		
	}
    

	render() {
		return( 
			<div> 
			<fieldset className ="pa5 mt4 ml5"> 
			<h2>Register</h2> 
			<form onSubmit = {this.handleSubmit}>
			  <input className = "ma2"
			  	type = "text"
			  	value = {this.state.firstname}
			  	name = "firstname"
			  	placeholder= "First Name"
			  	onChange = {this.handleChange}
			  	/>
			  	<br />

			  	<input className = "ma2"
			  	type = "text"
			  	required
			  	value = {this.state.lastname}
			  	name = "lastname"
			  	placeholder= "Last Name"
			  	onChange = {this.handleChange}
			  	/>
			  	<br />
			  	
			  	<input className = "ma2"
			  	type = "text"
			  	value = {this.state.city}
			  	name = "city"
			  	placeholder= "City"
			  	onChange = {this.handleChange}
			  	/>
			  		<br />
			  	<input className = "ma2"
			  	type = "text"
			  	value = {this.state.company}
			  	name = "company"
			  	placeholder= "Company"
			  	onChange = {this.handleChange}
			  	/>
			  		<br />
			  			<input className = "ma2"
			  	type = "text"
			  	value = {this.state.phone}
			  	name = "phone"
			  	placeholder= "Phone"
			  	onChange = {this.handleChange}
			  	/>
			  	<br />
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
			  		
			  	<input className = "registerbutton" onClick={this.onSubmitRegister}
      				type="submit" 
      				value="Register"/>
			 
			  </div> 
			)
	}
}

export default SignUp