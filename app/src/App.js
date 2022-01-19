import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'

const App = () => {
	const user = true;
	return (
		<>
			<Routes>
				<Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Login />} />
			</Routes>
		</>
	)
}

export default App
