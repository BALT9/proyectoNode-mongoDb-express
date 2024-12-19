// importa mi axios configurado en axios.js
import axios from "./axios.js";

// register 
// envia los datos del frontend al backend a traves de un (req.body )
// esas rutas van a las rutas creadas en routes 
export const registerRequest = (user) => axios.post(`/register`,user)

// Login
export const loginRequest = user => axios.post(`/login`,user)

// verificar token 
export const verifyTokenRequest = () => axios.get('/verify')

//logout cierra sesion
// export const logoutRequest
 