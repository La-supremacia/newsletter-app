import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import AuthState from './Context/Autentication/authState'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthState>
				<App />
			</AuthState>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
