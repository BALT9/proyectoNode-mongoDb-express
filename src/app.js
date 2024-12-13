// conecta con express
import express from 'express';  // Usar `import` para traer express

import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(express.json())

app.use("/api",authRoutes);



export default app;
