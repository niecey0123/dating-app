import React from 'react';

import { Link } from 'react-router-dom'

const PetItem = ({pet, setCurrentPet}) => {
    
    console.log(pet)
    
    return (
        <div>
            <Link to={`/pets/${pet.id}`}
                  onClick={() => setCurrentPet(pet)}>
                <p className="name">Name: {pet.name}</p>
                <img src={pet.photo} alt="PetImages" />
                <p className="breed">Breed:{pet.breed}</p>
            </Link>
            <button>Edit Pet</button>
            <button>Delete Pet</button>
        </div>
    );
}

export default PetItem;