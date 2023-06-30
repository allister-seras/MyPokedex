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

  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`);
  
  const pokemonData = {
    name: response.data.forms[0].name,
    height: response.data.height,
    weight: response.data.weight,
    //image: response.data.sprites.front_default,
    type: response.data.types[0].type.name,
}


  const pokemons = await Pokemons.bulkCreate(pokemonSeedData);
  
//create Teams at random
for (let i = 0; i < 10; i++) {
  //user select pokemon ids to be added to teams model??
//const { id: selectedPokemonId } = pokemons [

//not sure what to put in here

///];
  //create new Team with select pokemon ids.
  await Teams.create({
    pokemon_id: pokemons,
  
  }).catch((err) =>{
    console.log(err);
  });
}

  process.exit(0);
};

seedDatabase();
