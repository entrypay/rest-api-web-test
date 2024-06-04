const db = require("../db.js");

class CpController {
  constructor() {}

  allCp(req, res){
     db.query("SELECT * FROM cp", (err, result) => {
       if (err) {
         res.status(500).json({ error: err.message });
       } else {
         res.json(result.rows);
       }
     });
  }
}

module.exports = new CpController();
