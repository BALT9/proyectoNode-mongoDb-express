// conecta con mongooose
import mongoose from "mongoose";

// exporta la funcion q es la coneccion de mongo a index.js
export const connectDB = async ()=>{
    try {
        // connecta con mongo db
        await mongoose.connect('mongodb://127.0.0.1:27017/hotel1');
        console.log("conectado con mongo");
    } catch(error){
        console.log(error)
    }
};
