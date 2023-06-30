const router = require('express').Router();
const { User, Pokemon, Team } = require('../../models/index');
const withAuth = require('../../utils/auth');
const axios = require('axios');

router.get("/", async (req, res) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.pokemon}`);
    
        const pokemonData = {
            name: response.data.forms[0].name,
            height: response.data.height,
            weight: response.data.weight,
            //image: response.data.sprites.front_default,
            typeOne: response.data.types[0].type.name,
        }

        const secondType = response.data.types[1];
        if (secondType) {
          pokemonData.typeTwo = secondType.type.name;
        }

        return res.status(200).json(pokemonData);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// adds new pokemon to teams, pokemon tables
router.post("/", async (req, res) => {
    try {
        // {
        //  "pokemon": "ditto"
        //  "team": "round guys"
        // }

        // grabs pokemon data 
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.pokemon}`);
        
        // formats data
        const pokemonData = {
            name: response.data.forms[0].name,
            height: response.data.height,
            weight: response.data.weight,
            //image: response.data.sprites.front_default,
            typeOne: response.data.types[0].type.name,
        }

        const secondType = response.data.types[1];
            if (secondType) {
            pokemonData.typeTwo = secondType.type.name;
            }
        
        pokemonData.team = req.body.team;

        // adds data 
        Pokemon.create(pokemonData);

        // returns pokemon data
        return res.status(200).json(pokemonData);

    } catch (err) {
        return res.status(500).json(err);
    }
});

module.exports = router;
