const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genresRoute = require('./genres.js');
const videogameRoute = require('./videogame.js');
const videgamesRoute = require('./videogames.js');
const platformsRoute = require('./platforms.js');
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/genres', genresRoute);
router.use('/videogame', videogameRoute);
router.use('/platforms', platformsRoute);
router.use('/videogames', videgamesRoute);

module.exports = router;
