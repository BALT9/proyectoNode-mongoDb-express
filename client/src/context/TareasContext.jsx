import { createContext, useContext, useState } from "react";
// CRUD 
import { createTaskRequest, getTasksRequest, deleteTasksRequest, getTaskRequest, updateTasksRequest } from "../api/tareas";


// crea un contexto
const TaskContext = createContext();  

export const useTasks = () =>{
    const context = useContext(TaskContext);

    if(!context){
        throw new Error('useTasks debe estar dentro de TaskProvider')
    }
    return context
}

export function TaskProvider({children}){

    const [tasks, setTasks] = useState([]);

    // obtener las tareas 
    const getTasks = async () =>{
        try {
            const res = await getTasksRequest()
            setTasks(res.data)
            // console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    // crear tareas 
    const createTask = async(task) => {
        const res = await createTaskRequest(task)
        console.log(res)
    }

    // elimina la Tarea
    const deleteTask = async (id) =>{
        try {
            const res = await deleteTasksRequest(id)
            // console.log(res)
            if(res.status === 204) setTasks(tasks.filter((task) => task._id != id) )
        } catch (error) {
            console.log(error) 
        }
    }

    //obtiene una tarea
    const getTask = async(id) =>{
        try {
            const res = await getTaskRequest(id)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    // actualiza una tarea 
    const updateTask = async(id,task)=>{
        try {
            await updateTasksRequest(id, task)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <TaskContext.Provider 
            value={{
                tasks,
                createTask,
                getTasks,
                deleteTask,
                getTask,
                updateTask
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}