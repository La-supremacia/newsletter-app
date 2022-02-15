import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import adorno from '../Images/login-adorno.svg'
import logo from '../Images/login-logo.svg'
import { Box, Grid, Grommet, ResponsiveContext } from 'grommet'
import RegisterForm from '../Components/RegisterForm'

const Login = () => {
	const [isLoginRouter, setIsLoginRoute] = useState(true)

	return (
		<div>
			<Grommet full>
				<ResponsiveContext.Consumer>
					{(size) => (
						<Grid
							fill
							rows={size === 'medium' ? ['auto', 'flex'] : ['auto', '100%']}
							columns={size === 'medium' ? ['1/2', '1/2'] : ['auto', '100%']}
							areas={[
								{ name: 'nav', start: [0, 1], end: [0, 1] },
								{ name: 'main', start: [1, 1], end: [1, 1] },
							]}
						>
							{size === 'medium' ? (
								<Box
									gridArea="nav"
									background="light-5"
									className="bg-gradient"
									justify="center"
									align="center"
								>
									<div className="login-welcome">
										<div className="login-img">
											<img className="login-img-image" src={logo} alt="Logo de adorno" />
										</div>
										<div
											className="login-footer"
											style={{ backgroundImage: 'url(' + adorno + ')' }}
										></div>
									</div>
								</Box>
							) : null}
							<Box gridArea="main" background="white" justify="center" align="center">
								<main className="login-form">
									{isLoginRouter ? (
										<Link onClick={() => setIsLoginRoute(false)} to="/register">
											Register
										</Link>
									) : (
										<>
											<RegisterForm />
											<Link onClick={() => setIsLoginRoute(true)} to="/login">
												Ya tengo cuenta
											</Link>
										</>
									)}
								</main>
							</Box>
						</Grid>
					)}
				</ResponsiveContext.Consumer>
			</Grommet>
		</div>
	)
}

export default Login
