const User = require('./User');
const Pokemon = require('./Pokemons');
const Team = require('./Teams');

User.hasMany(Team, {
    foreignKey: "user_id"
});

Team.belongsTo(Pokemon, {
    foreignKey: "pokemon_id"
});

Pokemon.hasOne(Team, {
    foreignKey: "pokemon_id"
});

module.exports = { User, Pokemon, Team };
