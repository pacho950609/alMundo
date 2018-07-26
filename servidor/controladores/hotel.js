const mongo = require( './../db/conexion' );
const db = mongo.darDb();
const ObjectId = require('mongodb').ObjectID;
const dir = require('path')

module.exports = 
{
    //crea un hotel
    crear: function(req, res, next)
    {
            rutas.insert(element, (err,result)=>
            {   
               
            });
       
    },

    //modifica un hotel
    modificar: function(req, res, next)
    {

       
        let rutas = db.collection('rutas');

        rutas.update({'placas': req.body.placas},
            {$set:  { 'tipoVehiculo':   req.body.tipoVehiculo,
                      'SOAT': req.body.SOAT 
                    }},
            (err,result) =>
            {
                if(err)
                {
                    res.json("No se pudo actualizar el conductor");
                }
                else
                {
                   res.json(result);
                }
                
            });
         
    },

    //elimina un hotel
    eliminar: function(req, res, next)
    {
   
       
        let rutas = db.collection('rutas');
        let asignaciones = db.collection('asignaciones');

        rutas.remove({'_id' : ObjectId(req.params.id)})
        .then( result =>
        {
            return asignaciones.remove({'rutaID': req.params.id});
        })
        .then (result => 
        {      
            res.json(result);
        })
        .catch( err =>
        {
            res.json("No se pudo eliminar");
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