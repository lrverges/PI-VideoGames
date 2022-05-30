const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false     
    },
    released:{
      type: DataTypes.DATEONLY // solo fecha
    },
    rating:{
      type: DataTypes.DECIMAL,
      validate: {min:0, max:5}
    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    },
    image_background:{
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false
  });
};

//https://api.rawg.io/api/games?key=51a51aa49db84c6c8ddf88690a6beca1
