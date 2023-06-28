const express = require('express');
const axios = require('axios');
const Team = require('../../models/Teams');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, pokemonIds} = req.body;
        const pokemonData = [];

        //using Axios to fetch pokemon data
        for (const pokemonId of pokemonIds) {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
        const response = await axios.get(apiUrl);
        const pokemonData = response.data;

        pokemonData.push(pokemonData);
    }
        const team = await Team.create({
        name: name,
        pokemons: pokemonDataArray
    });

    res.status(201).json({ message: 'Team is successfuly created!', team });
  } 
    catch (err) {
    console.error('Error creating team:', err);
    res.status(500).json({ message: 'Please input a valid pokemon to create your team.'});
  }
    });

module.exports = router;