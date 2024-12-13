// importa el modelo de user
import User from '../models/user.model.js'
// exporta 2 controladores
// req obtiene y res envia 
export const register = async (req,res)=>{
    const {email, password, username} = req.body
    // console.log(req.body)
    
    try {
        const newUser =  new User({
            username,
            email,
            password
        })
    
        // muestra los datos en consola con el modelo user
        console.log("se guardo en mongoDB")
        console.log(newUser)
        // guarda en la base de datos
        const userSave = await newUser.save()
        // respuesta al frontend
        res.send('registrando y guardado: '+userSave)

    } catch (error){
        console.log(error)
    }
};
export const login = (req,res)=>res.send('login');