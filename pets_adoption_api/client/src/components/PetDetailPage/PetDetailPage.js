import React from 'react';

const PetDetailPage = ({currentPet}) => {
    console.log(currentPet)
    return (
        <div>
            <p>Name: {currentPet.name}</p>
            <p>Age:{currentPet.age} years old</p>
            <p>Location: {currentPet.location}</p>
            <p>Breed: {currentPet.breed}</p>
            <p>Bio:{currentPet.description}</p>
            
        </div>
    )
}

export default PetDetailPage


