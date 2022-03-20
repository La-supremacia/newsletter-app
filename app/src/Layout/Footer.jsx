import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Instagram, Facebook } from 'grommet-icons'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-content">
				<div className="footer-menu-container">
					<div className="footer-menu">
						<Link className="footer-link" to="/">
							My Contacts
						</Link>
						<Link className="footer-link" to="/">
							My Campaigns
						</Link>
					</div>
					<div className="footer-menu">
						<Link className="footer-link" to="/">
							My Organization
						</Link>
						<Link className="footer-link" to="/">
							Contact Us
						</Link>
					</div>
				</div>
				<div className="footer-up-icon">
					<Mail color="#fff" size="35px" />
					<Instagram className="ml" color="#fff" size="27px" />
					<Facebook className="ml" color="#fff" size="25px" />
				</div>
			</div>
			<div className="footer-right">
				<span>Newletter App 2022</span>
			</div>
		</footer>
	)
}

export default Footer
