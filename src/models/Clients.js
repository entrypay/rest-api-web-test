import {DataTypes} from 'sequelize'
import {sequelize} from '../database/database.js'

export const Clients = sequelize.define('clients',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: DataTypes.STRING
    },
    apellidos: {
        type: DataTypes.STRING
    },
    numero_telofonico: {
        type: DataTypes.STRING
    },
    correo_electronico: {
        type: DataTypes.STRING
    }, 
},{
    timestamps: false
})