import express from 'express'
import cotizacionRoutes from './routes/cotizacion.routes.js'

const app =  express()

//middlewares
app.use(express.json());


app.use(cotizacionRoutes);


export default app;