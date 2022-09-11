const router = require ('express').Router();
const { default: axios } = require('axios');
const { Videogame, Genre } = require ('../db')
const { API_KEY } = process.env;

function responseElement(respuesta){
    return{
        id: respuesta.id,
        name: respuesta.name,
        description: respuesta.description,
        released: respuesta.released,
        rating: respuesta.rating,
        platforms: respuesta.platforms.map(element => element.platform.name),
        genres: respuesta.genres.map(element =>  element.name),
        image_background: respuesta.background_image,
    }
}


router.get("/:idVideogame", async (req, res, next)=>{
    //Obtener el detalle de un videojuego en particular
    //Debe traer solo los datos pedidos en la ruta de detalle de videojuego
    //Incluir los géneros asociados
    const id = req.params.idVideogame
    let game = {}
    try {
        if(id.toString().length<10)
             {
                const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
                const respuesta = response.data;
                    game = responseElement(respuesta)
                    //res.json(game)
            }
            else {
                gameByBD = await Videogame.findByPk(id, {
                    include: 
                    {
                        model: Genre,
                        attributes: ["name"],
                        through: { attributes: [] },
                      },
                });
               
            game = {
            id: gameByBD.id,
            name: gameByBD.name,
            description: gameByBD.description,
            released: gameByBD.released,
            rating: parseFloat(gameByBD.rating),
            platforms: gameByBD.platforms,
            genres: gameByBD.genres.map(genre =>  genre.name),
            image_background: gameByBD.image_background,
            }

            }  
            
            res.json(game)
            
    } catch (error) {
        next(error)
    }
})


router.post('/', async (req, res, next)=>{
    //Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
    //Crea un videojuego en la base de datos
    const {name, description, rating, released, platforms, image_background, genres} = req.body
    try {
        const newVideogame = await Videogame.create({
            name,
            description,
            rating,
            platforms,
            released,
            image_background,
        })  
        genres.forEach(async (genre) => {
            let genresGame = await Genre.findOne({ where: { name: genre } })  
            newVideogame.addGenre(genresGame)
        })
        res.json(newVideogame)
        
    } catch (error) {
        next(error)
    }
});

// router.put('/',(req, res, next)=>{
//     res.send('soy un put en /videogame')
// });

// router.delete('/',(req, res, next)=>{
//     res.send('soy un delete en /videogame')
// });

module.exports = router;
