import React from 'react';
import 'typeface-roboto';
import PetItem from '../PetItem/PetItem'
// import { Card, Icon, Image } from 'semantic-ui-react'
import  '../../PetList.css';




const PetList = ( props) => {
  console.log(props.pets)
  
  


  const data =  props.pets && props.pets.map((pet, index) => {
    return  <PetItem key={pet.id} 
                      pet={pet}
                      faves={props.faves}
                      setCurrentPet={props.setCurrentPet} />
  })

  return (

    
    <div className='pets'>{ data }</div>
  )
}

export default PetList