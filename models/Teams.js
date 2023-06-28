const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Team model
class Team extends Model {}

Team.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'team'
    }
);

module.exports = Team;