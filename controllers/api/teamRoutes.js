const express = require('express');
const axios = require('axios');
const  { User, Pokemon, Team } = require('../../models/index');
const router = express.Router();

// gets all teams from user
// TODO come back and set this up to findByPk with users
router.get("/", async (req,res) => {
  try {
    Team.findAll().then((data) => {
      res.status(200).json(data);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// adds new Team
// TODO come back to make this connect to the user's profile
router.post('/', async (req, res) => {
    try {
        Team.create().then(() => {
          res.status(200).json("New team created");
        })
  } catch (err) {
    console.error('Error creating team:', err);
    res.status(500).json({ message: 'Please input a valid pokemon to create your team.'});
  }
    });

// adds pokemon to team
router.put("/:pokemonNum", (req,res) => {
  try {
    const teamSlot = (() => {
      return req.params.pokemonNum; 
    })
    Team.update(
      {
        teamSlot: req.body.pokemonId
      },
      {
        where: {id: req.body.teamNum }
      }
    )
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;