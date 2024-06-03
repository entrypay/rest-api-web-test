const express = require('express');
const dotenv  =  require('dotenv');
const app = express();

const quoteRoutes = require('./src/routes/quote.routes.js')

app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3001;

app.use("/api/quote", quoteRoutes);




app.listen(PORT, () => {
    console.log('Servidor Activo');
})

