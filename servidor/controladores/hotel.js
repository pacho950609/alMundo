const mongo = require( './../db/conexion' );
const db = mongo.darDb();
const dir = require('path')

module.exports = 
{
    //crea un hotel
    crear: function(req, res, next)
    {
        let hoteles = db.collection('hoteles');
        let hotel =
        {
            'id':req.body.id,
             'name':   req.body.name,
            'stars': req.body.stars,
            'price': req.body.price,
            'image': req.body.image,
            'amenities': req.body.amenities,
        };
        hoteles.insert(hotel, (err,result)=>
        {   
            res.json(result);
        });
       
    },

    //modifica un hotel
    modificar: function(req, res, next)
    {

       
        let hoteles = db.collection('hoteles');

        hoteles.update({'id': req.body.id},
            {$set:  { 'name':   req.body.name,
                      'stars': req.body.stars,
                      'price': req.body.price,
                      'image': req.body.image,
                      'amenities': req.body.amenities,
                    }},
            (err,result) =>
            {
                   res.json(result);
            });
         
    },

    //elimina un hotel
    eliminar: function(req, res, next)
    {  
        let hoteles = db.collection('hoteles');

        hoteles.remove({'id' : req.params.id}, (err,result) =>{
                res.json(result);
        });
       
    }, 

    //retorna todos los hoteles
    hoteles:(req, res, next) =>
    {
        let hoteles = db.collection('hoteles');

        hoteles.find({}).toArray(
            (err,result) =>
            {
                res.json(result);
            });
       
       
    },

    //filtra un hotel por estrellas
    filtrarPorEstrellas:(req, res, next) =>
    {
        let hoteles = db.collection('hoteles');
        let estrellas = req.params.estrellas.split('y').map(Number);
        console.log(req.params.estrellas);

        hoteles.find({'stars':{ $in: estrellas }}).toArray(
            (err,respuesta) =>
            {
                res.json(respuesta);
            });       
       
    },

    //filtra un hotel por nombre
    filtrarPorNombre:(req, res, next) =>
    {
        let hoteles = db.collection('hoteles');

        hoteles.find({'name':{$regex : ".*"+req.params.nombre+".*"}}).toArray(
            (err,respuesta) =>
            {
                res.json(respuesta);
            });       
       
    },

    //obtiene la imagen de un hotel
    obtenerImagen:(req, res, next) =>
    {
        let reqDir = dir.join(__dirname, '../imagenes/hoteles/');
        res.sendFile( reqDir + req.params.dir);      
    },



    
}