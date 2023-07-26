import '../styles/Header.sass'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className="kasa-title">
                <img src={logo} alt="logo kasa" className='kasa-logo' />
            </div>
            <div>
                <nav>
                    <NavLink to="/" className='nav_items' style={({ isActiveLink }) => {
                        return isActiveLink ? "active" : undefined
                    }}
                    >Accueil</NavLink>
                    <NavLink to="/about" className='nav_items' style={({ isActiveLink }) => {
                        return isActiveLink ? "active" : undefined
                    }}
                    >A propos</NavLink>
                </nav>
            </div>
        </div>
    )
}

export default Header
