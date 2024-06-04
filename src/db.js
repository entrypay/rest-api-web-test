const { Client } = require("pg"); // definimos la paqueteria para implementarla en este componente

const client = new Client({
  host: "localhost",
  user: "postgres", // reemplaza con tu usuario de PostgreSQL
  password: "root", // reemplaza con tu contraseña de PostgreSQL
  database: "entrypay", // reemplaza con el nombre de tu base de datos
  port: 5432, // puerto por defecto de PostgreSQL
});

/*
client.query("select *from seccion_cotizar;").then(result => {
    console.log(result);
})
*/

client.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Base de datos está conectada");
  }
});

module.exports = client;
