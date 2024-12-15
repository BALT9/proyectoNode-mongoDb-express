import {Router} from 'express';

// importa las 2 funciones de AuthenticatorAssertionResponse.controller.js
import { login,register,loguot, profile } from '../controllers/auth.controller.js';
import {home} from '../controllers/home.controller.js'

// importa una funcion de validateToken.js para acceder a profile 
import {authRequired} from '../middlewares/validateToken.js';

const router = Router();

router.post('/register',register)
router.post('/login',login)
router.post('/logout',loguot)


router.get('/profile',authRequired,profile) // primero ejecuta la funcion authRequired



router.post('/home',home)


export default router;