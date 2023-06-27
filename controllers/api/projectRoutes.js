const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');
const axios = require('axios');
const Pokemon = require("../../models/Project");


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

module.exports = router;
