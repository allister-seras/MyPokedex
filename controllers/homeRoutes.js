const router = require('express').Router();
const { Team, User, Pokemon } = require('../models');
const withAuth = require('../utils/auth');

// renders homescreen
router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('index.html');
  } catch (err) {
    res.status(500).json(err);
  }
});

// grabs pokemon data
// TODO render data  
router.get('/pokedex:id', async (req, res) => {
  try {
    const PokedexData = await Pokemon.findByPk(req.params.id);

    const pokemon = PokedexData.get({ plain: true });

    res.render('pokeDex', {
      ...pokemon,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO adjust handlebars to format data
router.get('/pokemon:id', async (req, res) => {
  try {
    const PokemonData = await Pokemon.findByPk(req.params.id);

    const pokemon = PokemonData.get({ plain: true });

    res.render('pokemon', {
      ...pokemon,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Team }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// renders user profile unless they are logged in than it renders login screen
router.get('/login', (req, res) => {
  
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {

  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('signup');
});


module.exports = router;
