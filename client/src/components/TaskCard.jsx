import { Link } from "react-router-dom";
import { useTasks } from "../context/TareasContext";

function TaskCard({tasks}) {

    const {deleteTask } = useTasks()

    return (
        <div key={tasks}>
            <h2>{tasks.nombreHotel}</h2>
            <button onClick={()=>{
                deleteTask(tasks._id)
            }}>eliminar</button>
            <Link to={`/tareas/${tasks._id}`}>editar</Link>
            <p>{tasks.descripcion}</p>

        </div>
    )
}
export default TaskCard;