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
        message: 'email invalido',
    }),

    password: z.string({
        required_error: 'contraseña requerido',
    }).min(8,{
        message: 'La contraseña debe tener al menos 8 caracteres',  // Y lo mismo aquí para la contraseña
    })
})

// login
export const loginSchema = z.object({
    email: z.string({
        required_error: 'email requerido',
    }).email({
        message: 'email no valido',
    }),

    password: z.string({
        required_error: 'contraseña requerido',
    }).min(8, {
        message: 'contraseña invalida',
    })
})