import React from 'react';
import {Link} from 'react-router-dom'


const  Header =() =>{
return(
    <header>
    <nav>
        <Link to={'/pets'}>Home</Link>
        <Link to={'/my-profile'}>Profile</Link>
        <Link to={'/matches'}>Match</Link>
        <Link to={'/create-owner'}>Sign Up</Link>
    </nav>
</header>
)

}

export default Header;