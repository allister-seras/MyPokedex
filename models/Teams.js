const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Team model
class Team extends Model {}

Team.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        pokemon1: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pokemon',
                key: 'id',
          }
        }, 
        pokemon2: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pokemon',
                key: 'id',
          }
        },
        pokemon3: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pokemon',
                key: 'id',
          }
        }
        ,
        pokemon4: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pokemon',
                key: 'id',
        }
        },
        pokemon5: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pokemon',
                key: 'id',
        }
        },
        pokemon6: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pokemon',
                key: 'id',
        }
        },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
              model: 'user',
              key: 'id',
      }
      },
        },
      {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'teams'
      }
);

module.exports = Team;