// configuracion de axios
import axios from "axios";
// aqui conecta con la base de datos 
const instance = axios.create({
    baseURL: 'http://localhost:2000/api',
    withCredentials: true
})

export default instance;