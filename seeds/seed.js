const sequelize = require('../config/connection');
const { User, Pokemons, Teams } = require('../models');

const userData = require('./userData.json');
const pokemonData = require('./pokemonData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const pokemons = await Pokemons.bulkCreate(pokemonSeedData);
  
//create Teams at random
for (let i = 0; i < 10; i++) {
  //user select pokemon ids to be added to teams model??
const { id: selectedPokemonId } = pokemons [

//not sure what to put in here

];
  //create new Team with select pokemon ids.
  await Teams.create({
    pokemon1: selectedPokemonId,
    pokemon2: selectedPokemonId,
    pokemon3: selectedPokemonId,
    pokemon4: selectedPokemonId,
    pokemon5: selectedPokemonId,
    pokemon6: selectedPokemonId,
  }).catch((err) =>{
    console.log(err);
  });
}

  process.exit(0);
};

seedDatabase();
