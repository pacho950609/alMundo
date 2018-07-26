const ClienteMongo = require( 'mongodb' ).MongoClient;
const configuracion = require('./../configuracion.json');
var _db;
const urlConexion = 'mongodb://'+configuracion.usuarioDB+':'+configuracion.contraseniaDB +'@'+configuracion.dbUrl;

module.exports = 
{

  //crea un conexion a la base de datos
  conectar:( callback )=> 
  {
    ClienteMongo.connect(urlConexion,(err,db) => 
        { 
            _db = db.db('almundo');
            return callback( err );
        });
  }, 

  //da una conexion a la base de datos
  darDb:() =>
  {
    return _db;
  }

};