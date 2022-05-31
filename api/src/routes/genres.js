const router = require ('express').Router();
const {Genre} = require ('../db.js')


router.get("/", async (req, res, next)=>{
    try {
        const getGenres = await Genre.findAll()
        res.json(getGenres)
    } catch (error) {
        next(error)
    }    
})

module.exports = router;
