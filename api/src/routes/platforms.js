const router = require ('express').Router();
const axios = require ('axios');
const { API_KEY } = process.env;

const platformsHC = [
    "3DO",
    "Android",
    "Apple II",
    "Atari 2600",
    "Atari 5200",
    "Atari 7800",
    "Atari 8-bit",
    "Atari Flashback",
    "Atari Lynx",
    "Atari ST",
    "Atari XEGS",
    "Classic Macintosh",
    "Commodore / Amiga",
    "Dreamcast",
    "Game Boy",
    "Game Boy Advance",
    "Game Boy Color",
    "Game Gear",
    "GameCube",
    "Genesis",
    "Jaguar",
    "Linux",
    "NES",
    "Neo Geo",
    "Nintendo 3DS",
    "Nintendo 64",
    "Nintendo DS",
    "Nintendo DSi",
    "Nintendo Switch",
    "PC",
    "PS Vita",
    "PSP",
    "PlayStation",
    "PlayStation 2",
    "PlayStation 3",
    "PlayStation 4",
    "PlayStation 5",
    "SEGA 32X",
    "SEGA CD",
    "SEGA Master System",
    "SEGA Saturn",
    "SNES",
    "Wii",
    "Wii U",
    "Xbox",
    "Xbox 360",
    "Xbox One",
    "Xbox Series S/X",
    "iOS",
    "macOS"
  ]

router.get('/', async (req, res, next)=>{
    try {
        const response = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`)
        const respuesta = response.data;
        let allPlatforms = respuesta.results.map(resp => resp.name)
        allPlatforms = allPlatforms.sort((a,b)=> {
            if(a>b) return 1
            if(a<b) return -1
            else return 0
                
        })
        res.json(allPlatforms)
    } catch (error) {
        next(error)
    }

})

module.exports = router;