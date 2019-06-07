import React from 'react';
import {petDeletion} from '../../services/api-helper'



import { Link } from 'react-router-dom'

const PetItem = (props) => {
    const deletePet = async (pet)=>{
        console.log(pet.id)
        await petDeletion(pet.id, pet)
        document.location.reload();
    }
    
    return (
        <div>
            <Link to={`/pets/${props.pet.id}`}
                  onClick={() => props.setCurrentPet(props.pet)}>
                <p className="name"></p>
                <img src={props.pet.photo} alt="PetImages" />
                <p className="breed">{props.pet.breed}</p>
            </Link>
           <button><Link 
                    onClick={()=> props.setCurrentPet(props.pet)}
                    to={`/edit-pet/${props.pet.id}`}>Edit Pet
                  </Link> </button>
            
            <button onClick={() => deletePet(props.pet)}>Delete Pet</button>
             
            <Link to='/matches'><button onClick={() => props.faves(3, props.pet.id)}>Like Pet</button></Link>
        </div>
    );
}

export default PetItem;