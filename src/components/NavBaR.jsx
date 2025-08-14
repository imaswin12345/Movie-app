import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'

function NavBaR() {
  return (
    <nav className='navbar'>

        <div className='navbar-brand'>

          <Link to="/" onClick={() => window.location.reload()}>MOVIE-APP</Link>

        </div>

        <div className='navbar-links'> 
            <Link className='nav=link' to={"/"}>Home</Link>
            <Link className='nav=link' to={'/favorites'}>Favorites</Link>
        </div>

    </nav>
  )
}

export default NavBaR