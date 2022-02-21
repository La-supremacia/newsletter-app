import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Pages/Login'
import Contacts from './Pages/Contacts'

const App = () => {
	const user = false
	return (
		<>
			<Routes>
				<Route
					path="/"
					element={user ? <Navigate to="/contacts" /> : <Navigate to="/login" />}
				/>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Login />} />
				<Route path="contacts" element={<Contacts />} />
			</Routes>
		</>
	)
}

export default App
