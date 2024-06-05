import Sequelize from 'sequelize'

export const sequelize = new Sequelize('entrypay', 'postgres', 'root',{
    host: 'localhost',
    dialect: 'postgres'
})