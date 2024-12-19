import {useForm} from 'react-hook-form'
import { useTasks } from '../context/TareasContext';
import {useNavigate, useParams} from 'react-router-dom'
import { useEffect } from 'react';


function TaskFormPage() {

    const {register, handleSubmit, setValue} = useForm();

    const {createTask , getTask, updateTask} = useTasks()

    const navigate = useNavigate()

    const params = useParams()
    // para editar tareas 
    useEffect(()=>{
        async function loadtask(){
            if(params.id){
                const task = await getTask(params.id);
                console.log(task)
                setValue('nombreHotel',task.nombreHotel)
                setValue('descripcion',task.descripcion)
            }
        }
        loadtask()
    }, [])
    
    
    const onSubmit = handleSubmit((data)=>{
        if(params.id){
            // edita tareas 
            updateTask(params.id, data)
        }else{
            // crea tareas 
            createTask(data);
        }
        navigate('/tareas')
    })

    return(
        <>
            <h1>agregar tareas</h1>

            <form action="" onSubmit={onSubmit}>
                <h1>titulo</h1>
                <input 
                    type="text" 
                    placeholder="title" 
                    {...register("nombreHotel")}
                    autoFocus
                    required
                />
                <p>descripcion</p>
                <textarea 
                    rows="3" 
                    placeholder='Descripcion'
                    {...register('descripcion')}
                ></textarea>
                <button type='submit'>Guardar</button>
            </form>
        </>
    )
}
export default TaskFormPage