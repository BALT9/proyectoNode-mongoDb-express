// conecta con express
import express from 'express';  // Usar `import` para traer express

// importa rutas
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/taks.routes.js';

// para extraer los cookies
import cookieParser from 'cookie-parser';
// para conectar puertos
import cors from 'cors'

const app = express();

app.use(express.json())
// permite y autoriza coneccion entre puertos
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}));

// usa los cookies
app.use(cookieParser())

app.use("/api",authRoutes);
app.use("/api",taskRoutes);



export default app;
