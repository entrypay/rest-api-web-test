const db = require("../db.js");

class QuoteController {
  // Creo que deberé hacer primero uno de los datos del usuario y después insertar para ver la cotización
  // y así lograr hacer todas las validaciones que me pide mi tarea
  // 1.- Insertar la cotización, que esto ya engloba todo mi objeto JSON que tengo en el React
  // 1.1- Validaciones para saber si ya tenía alguna cotización activa y así notificar al socio de negocios
  constructor() {}

  allQuote(req, res) {
    db.query("SELECT * FROM seccion_cotizar", (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(result.rows);
      }
    });
  }

  insertQuote(req, res) {
    const data = req.body;
    console.log(data.nombres);
    

    db.query(
      "INSERT INTO seccion_cotizar (nombres, apellidos, numero_telefonico, correo_electronico, fifa, tipo_de_plan, status, numero_usuarios, cp, id_prospecto)" + 
      "VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING*", 
      [
        data.nombres,
        data.apellidos,
        data.numero_telefonico,
        data.correo_electronico,
        data.fifa,
        data.tipo_de_plan,
        data.status,
        data.numero_usuarios,
        data.cp,
        data.id_prospecto,
      ],
      (err, result) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
            console.log("entro aqui");
          res.status(201).json(result.rows);
        }
      }
    );
  }


}

module.exports = new QuoteController();
