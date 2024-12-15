// importa el modelo hotel
import Hotel from '../models/hotel.model.js'

// trae las tareas de la base de datos
export const getTasks = async (req,res)=>{
    const hoteles = await Hotel.find({
        // me traera todas las tareas del usuario logeado
        user: req.user.id
    }).populate('user')
    res.json(hoteles)
}

// crea las tareas 
export const createTask = async (req,res)=>{
    const {nombreHotel,descripcion,date} = req.body;

    // muestra al usuario logeado
    console.log(req.user)

    const newHotel = new Hotel({
        nombreHotel,
        descripcion,
        date,
        user: req.user.id
    })

    const saveHotel = await newHotel.save();
    res.json(saveHotel);
}

//envia una tarea por id 
export const getTask = async (req,res)=>{
    const hotel = await Hotel.findById(req.params.id).populate('user');
    if (!hotel) return res.status(404).json({message: "hotel no encontrado"});
    res.json(hotel)
}

//elimina una tarea por id
export const deleteTask = async (req,res)=>{
    const hotel = await Hotel.findByIdAndDelete(req.params.id)
    if (!hotel) return res.status(404).json({message: "hotel no encontrado"});
    return res.sendStatus(204);
}

// actualiza(modifica) una tarea
export const updateTask = async (req,res)=>{
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate('user');
    if (!hotel) return res.status(404).json({message: "hotel no encontrado"});
    res.json(hotel)
}