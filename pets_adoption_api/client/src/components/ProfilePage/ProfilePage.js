 import React from 'react';
 import '../../ProfilePage.css';
 import { Link } from 'react-router-dom'
 import {ownerDeletion} from '../../services/owner-api-helper'
import '../../ProfilePage.css'



const ProfilePage=(props)=>{
    let {name,email,age,location,description } = props.owner;
   console.log(props);

   const deleteUser = async (owner)=>{
    console.log(owner.id)
    await ownerDeletion(owner.id, owner)
    document.location.reload();
}
   
    return(
        <div className="profileContainer">
        <div className="card">
        <h1>My Profile</h1>
        
          <div className="card-image">
            <figure className="image is-4by3">
              <img id='profilePhoto' src="https://mhcd.org/wp-content/uploads/2017/12/placeholder-man.png" alt="Placeholderimage" />
            </figure>
          </div>
          <div className="card-content">
            </div>
              <div className="media-content">
                <p className="title is-4" id="ownerName">{name}</p>
                <p className="title is-4  "id="ownerEmail">{email}</p>
                <p className="title is-4" id="ownerAge">{age}</p>
                <p className="subtitle is-6" id="ownerLocay">{location}</p>
         <div className="content">
            {description}
            <br />
            <footer className="card-footer">
            <p className="card-footer-item">
                    <span>
                        Edit <Link to={`/my-profile/${props.owner.id}`}
                  onClick={() => props.setCurrentOwner(props.owner)}>Profile</Link>
                    </span>
                    </p>
                    <p className="card-footer-item">
                    <span>
                        Delete <Link to={'/create-owner'} onClick={() => deleteUser(props.owner)}>Profile</Link>
                    </span>
                    </p>
          </footer>
        </div>
          </div>
        </div>
        </div>
          )
        
    }
export default ProfilePage;