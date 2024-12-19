export const validateSchema = (schema) => (req,res,next) => {
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        // el error es un objeto y lo Recoremos para enviar solo los mensajes
        return res.status(400).json(error.errors.map((error)=> error.message));
    }
}