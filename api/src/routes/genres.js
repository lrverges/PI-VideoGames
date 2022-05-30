const router = require ('express').Router();


router.get("/", (req, res, next)=>{
    //Obtener todos los tipos de géneros de videojuegos posibles
    //En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
    res.send('soy un get en genres')
})

module.exports = router;
