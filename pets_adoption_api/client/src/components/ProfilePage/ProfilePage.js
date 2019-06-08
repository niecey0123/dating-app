 import React from 'react';



const ProfilePage=(props)=>{
    let {name,email,age,location,description } = props.user;
    return(
        <div> 
            <h1>Welcome To The Profile's Page</h1> 
            <p>{name}</p>
            <p>{email}</p>
            <p>{age}</p>
            <p>{location}</p>
            <p>{description}</p>
            {/* <button>Update Profile</button> */}



            



            
        </div>
       

    )
}

export default ProfilePage