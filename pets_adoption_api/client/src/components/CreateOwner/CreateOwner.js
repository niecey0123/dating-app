import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import {createOwner} from '../../services/owner-api-helper'




class CreateOwner extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
     currentOwner:{},
     created: false,
     selectedFile:null
    };

  };


  onSignUpFormChange = (event) => {
    const { name, value } = event.target
    this.setState({[name]: value})
  }
    
  onSignUpFormSubmit = async (e) => {
    e.preventDefault()
    console.log(`Owner Submitted:`, this.state)


    let newOwner = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      location: this.state.location,
      phone_number: this.state.phone_number,
      description: this.state.description
    }

    const owner = await createOwner(newOwner);
    this.props.updatedUser(owner);
     this.setState({
      currentOwner: owner,
      created: true
    })

  }
  
  render() {
    const { currentOwner } = this.state;
    if(this.state.created === true){
        return <Redirect to={{
          pathname: '/my-profile',
          state: { currentOwner }
        }}/>
    }
    return (          
      <form className="datForm" onSubmit={this.onSignUpFormSubmit}>
        <h1>Create An Account</h1>
        <div className="field">
          <label htmlFor="name" className="label">Name</label>

          <div className="control">
            <div className="control has-icons-left has-icons-right">
              <input 
                className="input" 
                type ="text" 
                onChange={this.onSignUpFormChange} 
                name="name"
                placeholder="name" 
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
      
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </div>
            <p className="help is-success"></p>
          </div>
  
          <div className="field">
            <label htmlFor="name" className="label">Email</label>
              <input className="input is-success" type ="text" 
              onChange={this.onSignUpFormChange}
              placeholder="email" name="email"
              />
          </div>
       

        <div className="field">
            <label htmlFor="name" className="label">Age</label>
              <input className="input is-success" type ="text" 
              onChange={this.onSignUpFormChange}
              placeholder="age" name="age"
              />
          </div>

          <div className="field">
            <label htmlFor="name" className="label">Location</label>
              <input className="input is-success" type ="text" 
              onChange={this.onSignUpFormChange}
              placeholder="location" name="location"
              />
          </div>

          <div className="field">
            <label htmlFor="name" className="label">Phone Number</label>
              <input className="input is-success" type ="text" 
              onChange={this.onSignUpFormChange}
              placeholder="phone_number" name="phone_number"
              />
          </div>


          <div className="field">
            <label htmlFor="name" className="label">Description</label>
              <input className="input is-success" type ="text" 
              onChange={this.onSignUpFormChange}
              placeholder="description" name="description"
              />
          </div>
          </div>

          <div className="ImageUploader">
            <input type="file" onChange={this.fileSelectedHandler}></input>
          </div>
       
       
        <div className="field is-grouped">
          <div className="control">
            <button onClick={this.fileUploadHandler} className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>         
      </form>       
    )
  }
}

export default CreateOwner