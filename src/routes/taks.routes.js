import { Router } from "express";

import { authRequired } from "../middlewares/validateToken.js";

import { getTask,getTasks,createTask,updateTask,deleteTask } from "../controllers/tasks.controller.js";

const router = Router();

router.get('/tareas', authRequired, getTasks) 
router.get('/tareas/:id', authRequired, getTask) 
router.post('/tareas', authRequired,createTask) 
router.delete('/tareas/:id', authRequired,deleteTask) 
router.put('/tareas/:id', authRequired,updateTask) 


export default router;