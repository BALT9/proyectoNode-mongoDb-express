import { createContext, useContext, useEffect, useState} from 'react'

// funcion para llamar a la funcion q manda los datos al backed (login,register)
import { registerRequest, loginRequest, verifyTokenRequest } from '../api/auth'
// para ver las cookies en el fontend 
import Cookies from 'js-cookie'

// crea un contexto
const AuthContext = createContext()
// accede al contexto
export const useAuth = () =>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('useAuth debe estar dentro de provider');
    }
    return context;
}

// desde aqui es el Componente usado para englobar los componentes 
export const AuthProvider = ({children})=>{

    const [user,setUser] = useState(null);
    // autentica el registro
    const [isAuthenticated, setIsAutenticated] = useState(false);
    // errores
    const [errors, setErrors] = useState([])

    const [loading,setLoading] = useState(true)


    // registrarse
    const singup = async(user) => {
        try {
            // res muestra y envia los datos al backend api/auth.js
            const res = await registerRequest(user)  // Llamada a la API para registrar al usuario
            console.log(res.data);
            setUser(res.data); 
            // responde a la autenticacion
            setIsAutenticated(true)
            
        } catch (error) {
            console.log(error.response)
            setErrors(error.response.data)
        }
    };

    // login
    const signin = async(user) => {
        try {
            const res = await loginRequest(user)
            console.log(res)
            // responde a la autenticacion
            setIsAutenticated(true)
            setUser(res.data); 
        } catch (error) {
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)   
            }
            setErrors([error.response.data.message])
        }
    };
    
    // logout  (cerrar sesion)
    const logout = () => {
        Cookies.remove('token');
        setIsAutenticated(false);
        setUser(null)
    }

    // temporizador de mensajes de error 
    useEffect(()=> {
        if(errors.length > 0){
            const timer = setTimeout(()=>{
                setErrors([])
            },5000)
            return ()=> clearTimeout(timer)
        }
    },[errors])

    
    useEffect(()=> {
        async function checklogin(){
            // obtiene las cookies cada vez q se recarga la pag
            const cookies = Cookies.get();

            if(!cookies.token){
                setIsAutenticated(false)
                setLoading(false)
                return setUser(null) 

            }
            try {
                const res = await verifyTokenRequest(cookies.token);
                if(!res.data) {
                    setIsAutenticated(false);
                    setLoading(false)
                    return;
                }

                setIsAutenticated(true)
                setUser(res.data)
                setLoading(false)
            } catch (error) {
                setIsAutenticated(false)
                setUser(null)
                setLoading(false)
            }
        }
        checklogin();
    },[])



    return (
        <AuthContext.Provider 
            value={{
                singup,
                signin,
                logout,
                user,
                isAuthenticated,
                errors,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
