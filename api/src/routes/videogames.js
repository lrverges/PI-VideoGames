const router = require ('express').Router();
const { Videogame } = require ('../db')

router.get("/", (req, res, next)=>{
    //Obtener un listado de los videojuegos
    //Debe devolver solo los datos necesarios para la ruta principal

    // GET /videogames?name="..."
    //Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
    //Si no existe ningún videojuego mostrar un mensaje adecuado
    
    return Videogame.findAll()
    .then((Videogame)=>{

        res.send(Videogame)
    })
})
module.exports = router;
