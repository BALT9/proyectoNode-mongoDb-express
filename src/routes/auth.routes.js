import {Router} from 'express';

// importa las 2 funciones de AuthenticatorAssertionResponse.controller.js
import { login,register } from '../controllers/auth.controller.js';

const router = Router();

router.post('/register',register)
router.post('/login',login)

export default router;