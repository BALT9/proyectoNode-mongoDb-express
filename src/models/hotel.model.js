import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        nombreHotel: {
            type: String,
            required: true, 
        },
        descripcion: {
            type: String,
            required: false,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        // usuario al q pertenece
        user:{
            type: mongoose.Schema.Types.ObjectId,
            // referencia al modelo
            ref: 'User',
            required : true
        }
    },
    {
        timestamps: true,
    },

)
export default mongoose.model('hotel', taskSchema);