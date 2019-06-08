import React from 'react';

import PetItem from '../PetItem/PetItem'

const PetList = ({pets, setCurrentPet}) => {
  
  const data =  pets && pets.map((pet, index) => {
    return  <PetItem key={pet.id} 
                      pet={pet}
                      setCurrentPet={setCurrentPet} />
  })

  return (
    <div>{ data }</div>
  )
}

export default PetList


