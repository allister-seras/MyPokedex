const router = require('express').Router();
const user = require('./userRoutes');
const pokemon = require('./pokemonroutes');
const teams = require('./teamRoutes')

router.use('/user', user);
router.use('/pokemon', pokemon);
router.use('/teams', teams)

module.exports = router;