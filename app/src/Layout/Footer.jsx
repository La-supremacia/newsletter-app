import React from 'react'
import icon from '../Images/footer-icon.svg'
import { Link } from 'react-router-dom'

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
					<img className="footer-icon" src={icon} alt="icon-up" />
				</div>
			</div>
			<div className="footer-right">
				<span>Newletter App 2022</span>
			</div>
		</footer>
	)
}

export default Footer
