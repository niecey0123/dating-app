import React from 'react';

const PetDetailPage = ({currentPet}) => {
    console.log(currentPet)
    return (
        <div>
            <p>{currentPet.name}</p>
            <p>{currentPet.breed}</p>
            <button>Edit Pet</button>
        </div>
    )
}

export default PetDetailPage


