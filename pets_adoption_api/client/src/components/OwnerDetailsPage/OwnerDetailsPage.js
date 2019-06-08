import React from 'react';



const OwnerDetailsPage = ({currentOwner}) => {
    console.log(currentOwner)
    return (
          <div className="cardContainer">
          <div className="card">
          <h1>Owner Details</h1>

            <div className="card-image">
              <figure className="image is-4by3">
                <img src={currentOwner.photo} alt="Placeholderimage" />
              </figure>
            </div>
            <div className="card-content">
              </div>
                <div className="media-content">
                  <p className="title is-4" id="petName">{currentOwner.name}</p>
                  <p className="subtitle is-6" id="breed">{currentOwner.age} year's old</p>
                  <p className="subtitle is-6" id="breed">{currentOwner.location}</p>
              <div className="content">
              {currentOwner.description}
              <br />
          </div>
            </div>
          </div>
          </div>
    )
}

export default OwnerDetailsPage


