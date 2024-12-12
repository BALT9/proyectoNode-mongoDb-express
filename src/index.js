// app esta conectando con express
import app from "./app.js";
// connectDB esta conectando a una funcion de db.js  y conectando a mongo
import { connectDB } from "./db.js";

// usa la funcion exportada de db.js y conecta a mongo
connectDB();
// abre el servidor en el puerto 2000
app.listen(2000,()=>{
    console.log('servidor iniciado en puerto lacalhost:2000')
});





// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/hotel1');
// console.log("coneccion exitosa");

// const Hotel = mongoose.model('Hotel', { nombre: String, logo: String });

// const miHotel = new Hotel({ nombre: 'Hotel dia' , logo: "logo.jpg"});
// const miHotel2 = new Hotel({ nombre: 'Hotel noche' , logo: "imagen.jpg"});

// miHotel.save().then(() => console.log('se registro'));
// miHotel2.save().then(() => console.log('se registro'));

// const express = require('express');
// const app = express();
 
// app.get('/',(request,response)=>{
//     response.send({mensaje:'hola bienvenido a mi pagina web'})
// })
// app.get('/hotel',async(request,response)=>{
//     const hoteles = await Hotel.find({})
//     response.send({mensaje:'Esta es mi lista de hoteles: ',lista_hoteles:hoteles})
// })

// app.listen(2000,()=>{
//     console.log('servidor iniciado en puerto lacalhost:2000')
// });
