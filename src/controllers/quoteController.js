class QuoteController{

    //Creo que debere hacer primero uno de los datos del user creo y despues insertar para ver que cotizacion
    //y asi lograr hacer todas las validaciones que me pide mi tarea
    //1.- Insert la cotizacion que esto ya engloba todo mi objeto json que tengo en el react
    //1.1- validaciones para saber si ya tenia alguna cotizacion activa y asi notificar al socio de negocios
    constructor(){

    }
    
    allQuote(req, res){
        res.json({ msg: "All Quotes"})
    }

    insertQuote(req, res){
        res.json({ msg: "Insertando una Quote"})
    }

}



module.exports =  new QuoteController();