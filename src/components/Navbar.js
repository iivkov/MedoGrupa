import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../assets/hamburger.svg'
import Logo from '../assets/logo.png';
import '../App.css';

const Navbar = ({ highContrast }) => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
  <nav className="navbar">
    <div className="navbar-container">
      <div className="logo">
        <a href="/" rel="noopener noreferrer">
          <div><img src={Logo} alt="Logotip" /></div>
        </a>
      </div>
    <div className="menu-icon" onClick={handleShowNavbar}>
        <Hamburger />
    </div>
    <div className={`nav-elements  ${showNavbar && 'active'}`}>
      <ul>
        <li>
          <NavLink to="/">Početna</NavLink>
        </li>
        <li>
          <NavLink to="/o-nama">O nama</NavLink>
        </li>
        <li>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  )
}

export default Navbar