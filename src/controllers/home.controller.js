import Home from '../models/home.model.js'

export const home = async (req,res)=>{
    const {name} = req.body
    try {
        const newName = new Home({
            name
        })
        // muestra los datos en consola con el modelo home
        console.log("se guardo en mongoDB en home")
        console.log(newName)
        // guarda en la base de datos
        const nameSave = await newName.save()
        // respuesta al frontend
        res.send('registrando y guardado en hou: '+nameSave)

    } catch (error) {
        
    }
}