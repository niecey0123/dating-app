import React from 'react';
import {petDeletion} from '../../services/api-helper'

import '../../PetItem.css'

import { Link } from 'react-router-dom'

const PetItem = (props) => {
    const deletePet = async (pet)=>{
        console.log(pet.id)
        await petDeletion(pet.id, pet)
        document.location.reload();
    }
    
    return (
        <div className='petCardContainer'>
          <div className="card">
          <Link to={`/pets/${props.pet.id}`}
                            onClick={() => props.setCurrentPet(props.pet)}>
          <div className="card-image">

            <figure className="image is-4by3">
            
              <img src={props.pet.photo} alt="Placeholderimage" />
            </figure>
          </div>
          <div className="card-content">
            </div>
              <div className="media-content">
                <p className="title is-4">{props.pet.breed}</p>
            
          <i className="fas fa-bone"></i>

          </div>
          </Link>
          <footer className="card-footer">
          <button className='btn'>
              <Link onClick={()=> props.setCurrentPet(props.pet)}
                              to={`/edit-pet/${props.pet.id}`}>Edit Pet </Link> </button>
                      
              <button onClick={() => deletePet(props.pet)}>Delete Pet</button>
                      
          <Link to='/matches'><button onClick={() => props.faves(3, props.pet.id)}>Like Pet</button></Link>
          </footer>
          </div>
          </div>
              );
}

export default PetItem;