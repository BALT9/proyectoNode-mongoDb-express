import { useEffect } from "react";
import { useTasks } from "../context/TareasContext";
import TaskCard from "../components/TaskCard";


function Tareas(){

    const { getTasks, tasks } = useTasks ()

    useEffect(() => {
        getTasks()
    },[])

    if( tasks.length == 0) return (<h1>No hay tareas</h1>)

    return(
        <>            
            <h1>Tareas----------------------</h1>
            <div>
                {
                    tasks.map(tasks => (    
                        <TaskCard tasks={tasks} key={tasks._id}/>
                    ))
                }
            </div>
        </>
    )
}
export default Tareas