import axios from "./axios.js";

// obtiene las tareas 
export const getTasksRequest = () => axios.get('/tasks')
// obtiene la tarea 
export const getTaskRequest = (id) => axios.get(`/tasks/${id}`)
// crea una tarea 
export const createTaskRequest = (task) => axios.post('/tasks',task)
// actualiza una tarea 
export const updateTasksRequest = (id,task) => axios.put(`/tasks/${id}`,task)
// borra una tarea 
export const deleteTasksRequest = (id) => axios.delete(`/tasks/${id}`)
