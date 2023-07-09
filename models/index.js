const User = require('./User');
const Pokemon = require('./Pokemons');
const Team = require('./Teams');

User.hasMany(Team, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Team.hasOne(User, {
    foreignKey: "user_id"
});

Pokemon.hasOne(Team, {
    foreignKey: "pokemon_id"
});

Team.hasMany(Pokemon, {
    foreignKey: "team_id",
    onDelete: "CASCADE"
});



module.exports = { User, Pokemon, Team };
