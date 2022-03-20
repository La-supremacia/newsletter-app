import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Pages/Login'
import Contacts from './Pages/Contacts'
import AuthContext from './Context/Autentication/authContext'

const App = () => {
	const { auth } = useContext(AuthContext)
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={auth ? <Navigate to="/contacts" /> : <Navigate to="/login" />}
				/>
				<Route
					path="login"
					element={auth ? <Navigate to="/contacts" /> : <Login />}
				/>
				<Route
					path="register"
					element={auth ? <Navigate to="/contacts" /> : <Login />}
				/>
				<Route
					path="contacts"
					element={auth ? <Contacts /> : <Navigate to="/login" />}
				/>
			</Routes>
		</>
	)
}

export default App
