const sequelize = require('../config/connection');
const { User, Pokemon, Team } = require('../models');

const userData = require('./userData.json');
const pokemonSeedData = require('./pokemonData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // creates pokemon
  const pokemons = await Pokemon.bulkCreate(pokemonSeedData);

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

//get pokemon info
  
/*const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.pokemon}`);
    
const pokemonData = {
    name: response.data.forms[0].name,
    height: response.data.height,
    weight: response.data.weight,
    image: response.data.sprites.front_default,
    typeOne: response.data.types[0].type.name,
},*/

for (let i = 0; i < 10; i++) {
    // Get a random pokemon's `id`
    const { id: randomPokemonId } = pokemons[
      Math.floor(Math.random() * pokemons.length)
    ];

    // creates team and adds all pokemon 
    await Team.create({
        user_id: users[Math.floor(Math.random() * users.length)].id,
        pokemon1: randomPokemonId,
        pokemon2: randomPokemonId,
        pokemon3: randomPokemonId,
        pokemon4: randomPokemonId,
        pokemon5: randomPokemonId,
        pokemon6: randomPokemonId,
    }).catch((err) => {
       
        console.log(err);
      });
    }
  
    process.exit(0);
  };
  
  seedDatabase();
  