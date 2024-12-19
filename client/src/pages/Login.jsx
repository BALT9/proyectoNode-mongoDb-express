import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login(){

    const {register,handleSubmit,formState:{errors}} = useForm();

    // trae los valores del contexto useAuth {singup,user}
    const {signin, errors: signinErrors , isAuthenticated} = useAuth();

    // trae la funcion de navegar de react-router-dom
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(isAuthenticated) navigate("/tareas")
    }),[isAuthenticated]

    const onSubmit = handleSubmit((data)=>{
        signin(data)
        // console.log(data)
    })

    return(
        <>
            <h1>login</h1>
            {
                signinErrors.map((error,i)=>(
                    <div key={i}>
                        {error}
                    </div>
                ))
            }

            <form onSubmit={onSubmit}>
                
                <label htmlFor="">email</label>
                <input type="email" {...register('email',{required:true})} />
                {errors.email && <p>email requerido</p>}
                <label htmlFor="">password</label>
                <input type="password" {...register('password',{required:true})} />
                {errors.password && <p>password requerido</p>}

                <button type="submit">Ingresar</button>
            </form>
        </>
    )
}
export default Login;