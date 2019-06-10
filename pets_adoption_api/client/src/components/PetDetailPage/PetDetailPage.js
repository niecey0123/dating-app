import React from 'react';
import '../../PetDetailPage.css'



const PetDetailPage = ({currentPet}) => {
    console.log(currentPet)
    return (
          <div className="cardContainer">
          <div className="card">
          <h1>Pet Details</h1>

            <div className="card-image">
              <figure className="image is-4by3">
                <img src={currentPet.photo} alt="Placeholderimage" />
              </figure>
              <i className="fas fa-bone" id="bone"></i>
            </div>
            <div className="card-content">
              </div>
                <div className="media-content">
                  <p className="title is-4" id="petName">{currentPet.name}</p>
                  <p className="subtitle is-6" id="age">{currentPet.age} year's old</p>
                  <p className="subtitle is-6" id="dog">{currentPet.breed}</p>
              <div className="content">
              {currentPet.description}
              <br />
          </div>
            </div>
          </div>
          </div>
    )
}

export default PetDetailPage


