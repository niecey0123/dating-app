import React from 'react';
import {ownerDeletion} from '../../services/owner-api-helper'


import { Link } from 'react-router-dom'

const OwnerDisplay = (props) => {
    const deleteOwner = async (owner)=>{
        console.log(owner)
        await ownerDeletion(owner.id, owner)
        document.location.reload();
    }
    
    return (

          <div className="card">
          <Link to={`/owners/${props.owner.id}`}
                            onClick={() => props.setCurrentOwner(props.owner)}>
          <div className="card-image">

            <figure className="image is-4by3">
            
              <img src={props.owner.photo} alt="Placeholderimage" />
            </figure>
          </div>
          <div className="card-content">
            </div>
              <div className="media-content">
                <p className="title is-4">{props.owner.name}</p>
            
          </div>
          </Link>
          <footer className="card-footer">
          <button>
              <Link onClick={()=> props.setCurrentOwner(props.owner)}
                              to={`/edit-owner/${props.owner.id}`}>Edit Owner </Link> </button>
                      
              <button onClick={() => deleteOwner(props.owner)}>Delete Pet</button>
          </footer>
          </div>
              );
}

export default OwnerDisplay;