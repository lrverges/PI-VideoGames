const router = require ('express').Router();
const { Videogame, Genre } = require ('../db')
const axios = require ('axios');
require("dotenv").config();
const { API_KEY } = process.env;

router.get("/", (req, res, next)=>{
    //Obtener un listado de los videojuegos
    //Debe devolver solo los datos necesarios para la ruta principal
    //https://api.rawg.io/api/games?key=51a51aa49db84c6c8ddf88690a6beca1
    // GET /videogames?name="..."
    //Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
    //Si no existe ningún videojuego mostrar un mensaje adecuado
    try {
        let videogamePromiseApi = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page_size=35`)
        let videogamePromiseDb = Videogame.findAll({

            include: [
                {
                  model: Genre, 
                  attributes: ["id", "name"],
                  through: { attributes: [] },
                },
              ],
         
        });

        Promise.all([videogamePromiseApi, videogamePromiseDb])
            .then(respuesta =>{
               
                const getVideogames = [...respuesta[0].data.results, ...respuesta[1]]
                

                    console.log(getVideogames.length)

               // const getVideogamesDb = [...respuesta[1]][0]
            res.json(getVideogames)
        //     const [videogameApi, videogameDb] = respuesta;
        //     videogameApi= {...videogameApi.data.results, ...videogameDb}
        //  res.json(resultado)
        // .data.results
        })
    } catch (error) {
        next(error)
    }

})
module.exports = router;
