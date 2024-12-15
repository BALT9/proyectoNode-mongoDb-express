// importa un token secreto desde config.js
import { TOKEN_SECRET } from "../config.js";
// importa la libreria de tokens
import jwt from 'jsonwebtoken'
// generar token
export function createAccessToken(payload){
     return new Promise ((resolve,reject)=>{
        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: "1d",
            },
            (err,token) => {
                if(err) reject(err);
                resolve(token)
            }
        
        )
    })
}
