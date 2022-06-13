const router = require ('express').Router();
const { Op } = require("sequelize");
const { Videogame, Genre } = require ('../db')
const axios = require ('axios');
const orderAsc = require('../functions/orderAsc');
const { API_KEY } = process.env;



function selectColumns(game) {
  return {
    id: game.id,
    name: game.name,
    //description: game.description,
    //released: game.released,
    rating: game.rating,
    // platforms: game.platforms.map((element) => {
    //   return element.platform.name;
    // }),
    image_background: game.background_image,
    genres: game.genres.map(element => {
      return {
        //id: element.id,
        name: element.name,
      };
    }),
  };
}

router.get("/", (req, res, next) => {

  const { name } = req.query;
  let condition = {};
  let searchName = "";
  let pages = 4
  condition.include = [
    {
      model: Genre,
      attributes: ["name"],
      through: { attributes: [] },
    },
  ];
  if (name) {
    condition.where = { name: { [Op.iLike]: `%${name}%` } };
    searchName = `search=${name}&`;
    pages = 4
  }
  try {
    const videogamePromiseApi = [];
    for (let index = 1; index <= pages; index++) {
      videogamePromiseApi.push(
        axios.get(
          `https://api.rawg.io/api/games?${searchName}key=${API_KEY}&page_size=25&page=${index}`
        )
      );
    }
    let videogamePromiseDb = Videogame.findAll(condition);

    Promise.allSettled([...videogamePromiseApi, videogamePromiseDb]).then(
      (respuesta) => {
        let getVideogames = [];
        for (let index = 0; index < respuesta.length - 1; index++) {
          if (respuesta[index].status !== "rejected") {
            getVideogames = [
              ...getVideogames,
              ...respuesta[index].value.data.results,
            ];
          }
        }
        let games = getVideogames.map((game) => selectColumns(game));

        const arrayBd = respuesta[respuesta.length - 1].value;
      
        let videogameDb = {}
        for (let i = 0; i < arrayBd.length; i++) {
            videogameDb = {};
            videogameDb.id = arrayBd[i].dataValues.id;
            videogameDb.name = arrayBd[i].dataValues.name;
            videogameDb.image_background = arrayBd[i].dataValues.image_background;
            videogameDb.genres = arrayBd[i].dataValues.genres.map((element) => {
                return {
                  //id: element.id,
                  name: element.name,
                };
              }),
            games.push(videogameDb)
          
        }
        if(name){
            // games = orderAsc(games)
            // games.splice(15,games.length-15);
        }
        if (games.length > 0) res.json(games);
        else {
          res.status(404).json({ msg: `no se encontraron Videogames con ${name}` });
        }
      }
    );
  } catch (error) {
    next(error);
  }
});
module.exports = router;
