import React from 'react'
import logo from '../Images/header-icon.svg'

const Header = () => {
	return <header className="header">
        <div className="header-container">
            <h2 className="header-title">Newsletter App</h2>
            <img className="header-logo" src={logo} alt="Logo Newsletter App" />
        </div>
    </header>
}

export default Header
