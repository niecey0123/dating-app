import React from 'react';
import {Link} from 'react-router-dom'


const  Header =() =>{
return(
    <header>
    <nav>
        <Link to={'/pets'}>Home</Link>
    </nav>
</header>
)

}

export default Header;