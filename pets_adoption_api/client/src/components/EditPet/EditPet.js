import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { petUpdate } from '../../services/api-helper';


class EditPet extends Component {
  constructor(props){
    super(props)
    this.state ={
      pet: props.currentPet,
      updated:false
      
    }
    console.log(props.currentPet)
  }
  
  onPetFormChange = async (event) => {
    const element = event.target
    const name = element.name
    const value = element.value

    console.log(this.state);

    await this.setState(state => {
      return {
        ...state,
        'pet': { ...state.pet, [name]: value }
      } 
    })
  }


  onPetFormSubmit = async (event) => {
    event.preventDefault()

    let updatedPet = {
      name: this.state.pet.name,
      location: this.state.pet.location,
      breed:this.state.pet.breed,
      age: this.state.pet.age,
      description:this.state.pet.description
      
    }
   
    const pet = await petUpdate(this.props.currentPet.id, updatedPet);
    // get pets
    this.props.petData()
 console.log(pet)
    this.setState({
      pet: pet,
      updated: true
    })
  }

  render(){
    if(this.state.updated === true) {
      return <Redirect to="/pets" />
    }
    
    return (
      <div className="updatePetPage">
      <form onSubmit={ this.onPetFormSubmit } >
        <div>
          <label htmlFor="name">Pet Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            defaultValue={this.props.currentPet.name}
            onChange={ this.onPetFormChange }
            placeholder="Name" />
        </div>

        <div>
          <label htmlFor="age">Pet's Age:</label>
          <input
            id="address"
            type="text"
            name="age"
            defaultValue={this.props.currentPet.age}
            onChange={ this.onPetFormChange }
            placeholder="ex 2" />
        </div>
        
        <div>
        <label htmlFor="breed">Pet's Breed:</label>
          <input
            id="breed"
            type="text"
            name="breed"
            defaultValue={this.props.currentPet.breed}
            onChange={ this.onPetFormChange }
            placeholder="ex Golden Retriever" />
        </div>
        
        <div>
          <label htmlFor="location">Pet's Location:</label>
          <input
            id="location"
            type="text"
            name="locatiob"
            defaultValue={this.props.currentPet.location}
            onChange={ this.onPetFormChange }
            placeholder="ex Brooklyn" />
        </div>

        <div>
          <label htmlFor="description">Pet's Bio:</label>
          <input
            id="description"
            type="text"
            name="description"
            defaultValue={this.props.currentPet.description}
            onChange={ this.onPetFormChange }
            placeholder="" />
        </div>

        <div>
          <button 
            onClick={() => this.onPetFormSubmit}
            type="submit">Submit</button>
        </div>
        
      </form>
    </div>
    )
  }
}

export default EditPet;