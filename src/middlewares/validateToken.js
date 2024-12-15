// esta funcion solo es para evitar q entre profile si no estas autorizado

// importa la libreria de tokens
import jwt from 'jsonwebtoken'

// importa un token secreto desde config.js
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req,res,next)=>{
    // obtiene el token de la cokie guardada en el navegador
    const {token} = req.cookies;
    if(!token) return res.status(401).json({message: "no autorizado"});

    // verifica token
    jwt.verify(token, TOKEN_SECRET,(err,user)=>{
        if(err) return res.status(403).json({message: "token invalido"});

        // console.log(user)

        req.user = user;
        next()
    })

}