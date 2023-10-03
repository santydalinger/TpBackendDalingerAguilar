const sequelize = require('../database/db');
const {Model,DataTypes} = require('sequelize');

class Estudiante extends Model {}

Estudiante.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    nombre:{
        type:DataTypes.STRING
    },
    apellido:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    img:{
        type:DataTypes.STRING
    }
},
{ 
    sequelize,
    modelName: 'Estudiante'
 }
);

Estudiante.sync()
    .then(() => {
        console.log('La tabla de usuarios ha sido creada');
    })
    .catch((error) => {
        console.error('Error al crear la tabla de usuarios: ', error);
    });

module.exports = Estudiante;