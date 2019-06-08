import React from 'react';
import 'typeface-roboto';
import OwnerDisplay from '../OwnerDisplay/OwnerDisplay'





const OwnerList = ( props) => {
  console.log(props.owners)
  
  


  const data =  props.owners && props.owners.map((owner, index) => {
    return  <OwnerDisplay key={owner.id} 
                      owner={owner}
                      setCurrentOwner={props.setCurrentOwner} />
  })

  return (

    
    <div>{ data }</div>
  )
}

export default OwnerList;


