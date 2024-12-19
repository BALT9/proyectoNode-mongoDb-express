import {useForm} from 'react-hook-form'
import { useAuth } from '../context/authContext'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'


function Register(){

    const {register, handleSubmit,formState:{errors}} = useForm()
    // trae los valores del contexto useAuth {singup,user}
    const {singup , isAuthenticated ,errors:RegisterErrors} = useAuth();
    // trae la funcion de navegar de react-router-dom
    const navigate = useNavigate()
    useEffect(()=>{
        if(isAuthenticated) navigate("/tareas")
    }),[isAuthenticated]
    // console.log(user)

    const onSubmit = handleSubmit( async(values)=>{
        singup(values)
    })

    return(
        <>
            {
                RegisterErrors.map((error,i)=>(
                    <div key={i}>
                        {error}
                    </div>
                ))
            }
            <h1>Register</h1>

            <form onSubmit={onSubmit}>
                <label htmlFor="">username</label>
                <input type="text" {...register('username',{required:true})} />
                {errors.username && <p>username requerido</p>}
                <label htmlFor="">email</label>
                <input type="email" {...register('email',{required:true})} />
                {errors.email && <p>email requerido</p>}
                <label htmlFor="">password</label>
                <input type="password" {...register('password',{required:true})} />
                {errors.password && <p>password requerido</p>}

                <button type="submit">Registrar</button>
            </form>

        </>
    )
}
export default Register;