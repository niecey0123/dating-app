import React from 'react';
import {petDeletion} from '../../services/api-helper'

import { Link } from 'react-router-dom'

const PetItem = ({pet, setCurrentPet}) => {
    
    const deletePet = async (pet)=>{
        console.log(pet.id)
        await petDeletion(pet.id, pet)
        document.location.reload();
    }
    
    return (
        <div>
            <Link to={`/pets/${pet.id}`}
                  onClick={() => setCurrentPet(pet)}>
                <p className="name"></p>
                <img src={pet.photo} alt="PetImages" />
                <p className="breed">{pet.breed}</p>
            </Link>
           <button><Link 
                    onClick={()=> setCurrentPet(pet)}
                    to={`/edit-pet/${pet.id}`}>Edit Bars
                  </Link> </button>
            
            <button onClick={() => deletePet(pet)}>Delete Pet</button>
        </div>
    );
}

export default PetItem;