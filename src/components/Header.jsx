import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import InstagramIcon from './InstagramIcon'
import logo from '../images/Logo-aligned-heart.png'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when route changes
  const handleLinkClick = () => {
    closeMenu()
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo" onClick={handleLinkClick}>
            <img src={logo} alt="Aligned Heart" className="logo-image" />
          </Link>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
            <span className="menu-bar"></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li>
              <Link to="/individuals" className="nav-link" onClick={handleLinkClick}>Individuals</Link>
            </li>
            <li>
              <Link to="/couples" className="nav-link" onClick={handleLinkClick}>Couples</Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link>
            </li>
            <li>
              <Link to="/services" className="nav-link" onClick={handleLinkClick}>Services</Link>
            </li>
            <li>
              <Link to="/new-client" className="nav-link" onClick={handleLinkClick}>Contact</Link>
            </li>
            <li>
              <a href="https://www.instagram.com/terra_artist_love/" target="_blank" rel="noopener noreferrer" className="nav-link nav-icon">
                <InstagramIcon size={22} />
              </a>
            </li>
          </ul>

          {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
        </nav>
      </div>
    </header>
  )
}

export default Header
