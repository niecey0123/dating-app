import React from 'react';

import PetItem from '../PetItem/PetItem'

const PetList = ({pets, setCurrentPet, faves}) => {
  
  const data =  pets && pets.map((pet, index) => {
    return  <PetItem key={pet.id} 
                      pet={pet}
                      faves={faves}
                      setCurrentPet={setCurrentPet} />
  })

  return (
    <div>{ data }</div>
  )
}

export default PetList


