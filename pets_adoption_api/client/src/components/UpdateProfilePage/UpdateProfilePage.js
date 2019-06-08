import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import ProfilePage from '../ProfilePage/ProfilePage'
import {ownerUpdate} from '../../services/owner-api-helper'
import '../../CreateOwner.css'

class UpdateProfilePage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
     owner:props.currentOwner,
     updated: false
    };
  };

  onOwnerFormChange = async (event) => {
    const element = event.target
    const name = element.name
    const value = element.value

    console.log(this.state);

    await this.setState(state => {
      return {
        ...state,
        'owner': { ...state.owner, [name]: value }
      } 
    })
  }
  
    
  onOwnerFormSubmit = async (e) => {
    e.preventDefault()
    console.log(`Owner Submitted:`, this.state)

    let updatedOwner = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      location: this.state.location,
      phone_number: this.state.phone_number,
      description: this.state.description
    }

    const owner = await ownerUpdate(this.props.currentPet.id, updatedOwner)
    console.log(owner)
    this.props.ownerData()
    this.setState({
      currentOwner: owner,
      created: true
    })
  }

  render(){
    if(this.state.updated === true) {
      return <Redirect to="/my-profile/:id" />
    }
    return (          
        <form className="datForm" onSubmit={this.onOwnerFormSubmit}>
      <img className='formImg'src={require('../../images/pet.png')} alt='animals'/>
        <h1>Create An Account</h1>
        <div className="field">
          <label htmlFor="name" className="label">Name</label>

          <div className="control">
            <div className="control has-icons-left has-icons-right">
              <input 
                className="input" 
                type ="text" 
                onChange={this.onOwnerFormChange} 
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
              onChange={this.onOwnerFormChange}
              placeholder="email" name="email"
              />
          </div>
       

        <div className="field">
            <label htmlFor="name" className="label">Age</label>
              <input className="input is-success" type ="text" 
              onChange={this.onOwnerFormChange}
              placeholder="age" name="age"
              />
          </div>

          <div className="field">
            <label htmlFor="name" className="label">Location</label>
              <input className="input is-success" type ="text" 
              onChange={this.onOwnerFormChange}
              placeholder="location" name="location"
              />
          </div>

          <div className="field">
            <label htmlFor="name" className="label">Phone Number</label>
              <input className="input is-success" type ="text" 
              onChange={this.onOwnerFormChange}
              placeholder="phone_number" name="phone_number"
              />
          </div>


          <div className="field">
            <label htmlFor="name" className="label">Description</label>
              <input className="input is-success" type ="text" 
              onChange={this.onOwnerFormChange}
              placeholder="description" name="description"
              />
          </div>
          </div>
       
        <div className="field is-grouped">
          <div className="control">
            <button className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>         
      </form>       
    )
  }
}
export default UpdateProfilePage