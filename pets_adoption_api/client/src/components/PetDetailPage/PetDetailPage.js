import React from 'react';
import '../../PetDetailPage.css'



const PetDetailPage = ({currentPet}) => {
    console.log(currentPet)
    return (
<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={currentPet.photo} alt="Placeholder image" />
    </figure>
  </div>
  <div className="card-content">
    </div>
      <div className="media-content">
        <p className="title is-4">{currentPet.name}</p>
        <p className="subtitle is-6">{currentPet.breed}</p>
     
    <div className="content">
    {currentPet.description}
      <br />
</div>
<i class="fas fa-bone"></i>
  </div>
</div>

        //     <Card
        //     className="petDisplay"
        //     image={currentPet.photo}
        //     header={currentPet.name}
        //     meta={currentPet.breed}
        //     description={currentPet.description}
        //     extra={extra}
        //   />
    )
}

export default PetDetailPage


