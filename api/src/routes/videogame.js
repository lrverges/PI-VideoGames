const router = require ('express').Router();
const { Videogame, Genre } = require ('../db')

router.get("/:idVideogame", (req, res, next)=>{
    //Obtener el detalle de un videojuego en particular
    //Debe traer solo los datos pedidos en la ruta de detalle de videojuego
    //Incluir los géneros asociados
    try {
        
        res.send(`soy un get con el id ${req.params.idVideogame}`)
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
        //await Videogame.addGenres(genres);
        
        genres.forEach(async (genreId) => {
            let genresGame = await Genre.findOne({ where: { id: genreId } })
            
           await newVideogame.addGenre(genresGame)
        })
        res.json(newVideogame)
        
    } catch (error) {
        next(error)
    }
});

router.put('/',(req, res, next)=>{
    res.send('soy un put en /videogame')
});

router.delete('/',(req, res, next)=>{
    res.send('soy un delete en /videogame')
});

module.exports = router;
