import {
 REGISTRO_EXITOSO,
 REGISTRO_ERROR,
 OBTENER_USUARIO,
 LOGIN_EXITOSO,
 LOGIN_ERROR,
 CERRAR_SESION,
} from '../types'

const AuthReducer = (state, action) => {
 switch (action.type) {
  case REGISTRO_EXITOSO:
  case LOGIN_EXITOSO:
   localStorage.setItem('token', action.payload.token)
   return {
    ...state,
    msj: null,
    isLoading: false,
   }
  case OBTENER_USUARIO:
   return {
    ...state,
    user: action.payload,
    isLoading: false,
   }
  case CERRAR_SESION:
  case LOGIN_ERROR:
  case REGISTRO_ERROR:
   localStorage.removeItem('token')
   return {
    ...state,
    user: null,
    auth: null,
    msj: action.payload,
    isLoading: false,
   }

  default:
   return state
 }
}

export default AuthReducer
