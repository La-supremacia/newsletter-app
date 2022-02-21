import React, { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

const AuthState = (props) => {
	const initialState = {
		auth: localStorage.getItem('token'),
		user: null,
		msj: null,
		isLoading: true,
	}

	const [state, dispatch] = useReducer(AuthReducer, initialState)

	return (
		<AuthContext.Provider
			value={{
				auth: state.auth,
				user: state.user,
				msj: state.msj,
				isLoading: state.isLoading,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthState
