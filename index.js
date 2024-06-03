const express = require('express');
const dotenv  =  require('dotenv');
const app = express();

app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3001;


app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.listen(PORT, () => {
    console.log('Servidor Activo');
})

