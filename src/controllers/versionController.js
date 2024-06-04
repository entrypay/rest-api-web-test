const db = require("../db.js");

class VersionController{

    constructor(){

    }

    allVersion(req, res){
         db.query("SELECT * FROM tipos_de_planes", (err, result) => {
           if (err) {
             res.status(500).json({ error: err.message });
           } else {
             res.json(result.rows);
           }
         });
    }

}


module.exports = new VersionController();