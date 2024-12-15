import {z} from 'zod'

// validacion de datos

// registro 
export const registerSchema = z.object({
    username: z.string({
        required_error: 'usuario requerido',
    }),

    email: z.string({
        required_error: 'email requerido',
    }).email({
        required_error: 'email invalido',
    }),

    password: z.string({
        required_error: 'contraseña requerido',
    }).min(8, {
        required_error: 'contraseña muy corta',
    })
})

// login
export const loginSchema = z.object({
    email: z.string({
        required_error: 'email requerido',
    }).email({
        required_error: 'email invalido',
    }),

    password: z.string({
        required_error: 'contraseña requerido',
    }).min(8, {
        required_error: 'contraseña muy corta',
    })
})