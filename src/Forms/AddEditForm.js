import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    name:'',
    location: '',
    restaurant: '',
    skills: '',
    hobbies: ''
  
  
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/crud', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:this.state.name,
        location: this.state.location,
        restaurant: this.state.restaurant,
        skills: this.state.skills,
        hobbies: this.state.hobbies
        
       
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/crud', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id:this.state.id,
       name:this.state.name,
        location: this.state.location,
        restaurant: this.state.restaurant,
        skills: this.state.skills,
        hobbies: this.state.hobbies
        
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, location, restaurant, name, skills, hobbies } = this.props.item
      this.setState({ id, location, restaurant, name, skills, hobbies  })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
       <FormGroup>
          <Label for="name">name</Label>
          <Input type="text" name="name" id="name" onChange={this.onChange} value={this.state.name === null ? '' : this.state.name}   />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input type="text" name="location" id="location" onChange={this.onChange} value={this.state.location === null ? '' : this.state.location} />
        </FormGroup>
        <FormGroup>
          <Label for="restaurant">Favorite Restaurant</Label>
          <Input type="text" name="restaurant" id="restaurant" onChange={this.onChange} value={this.state.restaurant === null ? '' : this.state.restaurant}  />
        </FormGroup>
        <FormGroup>
          <Label for="skills">Skills</Label>
          <Input type="text" name="skills" id="skills" onChange={this.onChange} value={this.state.skills === null ? '' : this.state.skills}  />
        </FormGroup>
        <FormGroup>
          <Label for="hobbies">Hobbies</Label>
          <Input type="text" name="hobbies" id="hobbies" onChange={this.onChange} value={this.state.hobbies === null ? '' : this.state.hobbies}   />
        </FormGroup>
       
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm