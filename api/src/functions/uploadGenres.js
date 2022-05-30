const axios = require('axios');
const {Genre} = require('../db.js');
require("dotenv").config();
const { API_KEY } = process.env;

module.exports = async function uploadGenres(){
    try {
        const getGenresApi = await axios.get( `https://api.rawg.io/api/genres?key=${API_KEY}`)
       // console.log(getGenresApi.data.results)
        let genres = getGenresApi.data.results.map(genre => {
            return {
                name: genre.name
            }    
        })
        genres.map(genre => {
            Genre.findOrCreate({
                where: {name: genre.name}
            })
        })
    } catch (error) {
        console.log(error)
    }
}