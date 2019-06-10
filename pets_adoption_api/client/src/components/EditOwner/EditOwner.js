import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { ownerUpdate } from '../../services/owner-api-helper';
import '../../EditOwner.css'

class EditOwner extends Component {
  constructor(props){
    super(props)
    this.state ={
      owner: props.currentOwner,
      updated:false
      
    }
    console.log(props)
  }
  
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


  onOwnerFormSubmit = async (event) => {
    event.preventDefault()

    let updatedOwner = {
      name: this.state.owner.name,
      email:this.state.owner.email,
      age:this.state.owner.age,
      location: this.state.owner.location,
      description:this.state.owner.description
      
    }
   
    const owner = await ownerUpdate(this.props.currentOwner.id, updatedOwner);
    // get pets
    this.props.ownerData()
 console.log(this.props.ownerData)
    this.setState({
      owner: owner,
      updated: true
    })
  }

  render(){
    if(this.state.updated === true) {
      return <Redirect to="/owners" />
    }
    
    return (
        <div className='ownerUpdatePage'>
      <form onSubmit={ this.onOwnerFormSubmit } >
      <h1>Edit Account</h1>

        <div className="field">
          <label htmlFor="name" className="label">Name:</label>
          <div className="control">
          <input
            className="input"
            id="name"
            type="text"
            name="name"
            defaultValue={this.props.currentOwner.name}
            onChange={ this.onOwnerFormChange }
            placeholder="Name" />
        </div>

        <div className="field">
          <label htmlFor="email" className="label">Email:</label>
          <input
            className="input"
            id="email"
            type="text"
            name="email"
            defaultValue={this.props.currentOwner.email}
            onChange={  this.onOwnerFormChange }
            placeholder="ex PettyWap@bet.com" />
        </div>
        
        <div className="field">
        <label htmlFor="age" className="label">Age:</label>
          <input
            className="input"
            id="age"
            type="text"
            name="age"
            defaultValue={this.props.currentOwner.age}
            onChange={  this.onOwnerFormChange }
            placeholder="ex Golden Retriever" />
        </div>
        
        <div className="field">
          <label htmlFor="location" className="label">Location:</label>
          <input
            className="input"
            id="location"
            type="text"
            name="location"
            defaultValue={this.props.currentOwner.location}
            onChange={  this.onOwnerFormChange }
            placeholder="ex Brooklyn" />
        </div>

        <div className="field">
          <label htmlFor="description" className="label">Bio:</label>
          <input
           className="input"
            id="description"
            type="text"
            name="description"
            defaultValue={this.props.currentOwner.description}
            onChange={  this.onOwnerFormChange }
            placeholder="" />
        </div>

        <div>
          <button 
            onClick={() => this.onOwnerFormSubmit}
            type="submit">Submit</button>
        </div>
        </div>
      </form>
      </div>
    )
  }
}

export default EditOwner;