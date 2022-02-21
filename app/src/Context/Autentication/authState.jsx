import React, { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

const AuthState = (props) => {
	const initialState = {
		token: localStorage.getItem('token'),
		autenticado: null,
		usuario: null,
		mensaje: null,
		cargando: true,
	}

	const [state, dispatch] = useReducer(AuthReducer, initialState)

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				autenticado: state.autenticado,
				usuario: state.usuario,
				mensaje: state.mensaje,
				cargando: state.cargando,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthState
