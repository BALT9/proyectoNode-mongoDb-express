// importa el modelo de user
import User from '../models/user.model.js'
// importa bcrypt para encriptar contraseñas 
import bcrypt from 'bcrypt'
// para los tokkens
import { createAccessToken } from '../libs/jwt.js';


// exporta 2 controladores
// req obtiene y res envia 
export const register = async (req,res)=>{
    const {email, password, username} = req.body
    // console.log(req.body)
    
    try {
        // encriptar la contraseña
        const passwordHashs = await bcrypt.hash(password,10)

        const newUser =  new User({
            username,
            email,
            password: passwordHashs,
        })
    
        // muestra los datos en consola con el modelo user
        console.log("se guardo en mongoDB")
        console.log(newUser)
        // guarda en la base de datos
        const userSave = await newUser.save()

        // genera token
        const token = await createAccessToken({id: userSave._id})
        // res.json({token})
        // guarda el token en el cookie
        res.cookie('token', token)
        // res.json({
        //     message: "usuario creado correctamente",
        // })

        // respuesta al frontend
        res.json({
            id: userSave._id,
            username: userSave.username,
            email: userSave.email,
        })

    } catch (error){
        res.status(500).json({message: error.message});
    }
};

export const login = async (req,res)=>{
    const {email, password} = req.body
    // console.log(req.body)
    
    try {
        // busca al usuario
        const userFound = await User.findOne({email})

        // busca y compara el email
        if(!userFound) return res.status(400).json({message: "usuario no encontrado"});

        // compara las contraseñas 
        const isMatch = await bcrypt.compare(password,userFound.password);

        if(!isMatch) return res.status(400).json({message: "contraseña incorrecta"});
        
        // genera token
        const token = await createAccessToken({id: userFound._id})

        // res.json({token})
        // guarda el token en el cookie
        res.cookie('token', token)

        // respuesta al frontend
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        })

    } catch (error){
        res.status(500).json({message: error.message});
    }
};
// quita el token q esta en cokkies
export const loguot = (req,res)=>{
    res.cookie('token',"",{
        expires : new Date(0)
    })
    return res.sendStatus(200);
}

export const profile = async(req,res)=>{
    // busca al usuario por la id
    const userFound = await User.findById(req.user.id)

    if(!userFound) return res.status(400).json({message: "usuario no encontrado"});
    return res.json({
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
    })
}