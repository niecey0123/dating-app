import React from 'react';
import {Link} from 'react-router-dom'


const  Header =() =>{
return(
    <header>
      <div>
        <nav className="navbar is-warning" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
          <img src="https://web4africa.com/wp-content/uploads/doPET_logo-e1541252153309.png" width={112} height={28} alt="" />
      </a>

       <div className="navbar-start">
         <li className="navbar-item"><Link to="/pets">Home</Link></li>
          <li className="navbar-item"><Link to={'/my-profile'}>Profile</Link></li>
          <li className="navbar-item"><Link to={'/matches'}>Match</Link></li>
          <li className="navbar-item"><Link to={'/owners'}>Owners</Link></li>

        </div>


    <div className="navbar-end">
    <div className="navbar-item">
    <div className="buttons">
    <ul className="button  is-light">
    <li className="navbar-item"><Link to={'/create-owner'}>Sign Up</Link></li>
          </ul>
            </div>
        </div>
     </div>
    </div>
</nav> 
       </div>

    {/* <nav>
        <Link to={'/pets'}>Home</Link>
        <Link to={'/my-profile'}>Profile</Link>
        <Link to={'/matches'}>Match</Link>
        <Link to={'/create-owner'}>Sign Up</Link>
    </nav> */}
</header>
)

}

export default Header;