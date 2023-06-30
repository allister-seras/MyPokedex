const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Teams model
class Teams extends Model {}

// create fields/columns for Teams model
Teams.init(
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
          model: 'Pokemons',
          key: 'id',
          unique: false
    },
  },
    pokemon2: {
      type: DataTypes.INTEGER,
      references: {
          model: 'pokemon',
          key: 'id',
          unique: false
    }
  },
  pokemon3: {
      type: DataTypes.INTEGER,
      references: {
          model: 'pokemon',
          key: 'id',
          unique: false
    }
  }
  ,
  pokemon4: {
      type: DataTypes.INTEGER,
      references: {
          model: 'pokemon',
          key: 'id',
          unique: false
  }
  },
  pokemon5: {
      type: DataTypes.INTEGER,
      references: {
          model: 'pokemon',
          key: 'id',
          unique: false
  }
  },
  pokemon6: {
      type: DataTypes.INTEGER,
      references: {
          model: 'pokemon',
          key: 'id',
          unique: false
  }
  },
  
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'id',
    },

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

module.exports = Teams;
