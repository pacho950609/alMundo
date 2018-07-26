
const mongo = require( './servidor/db/conexion' );

mongo.conectar( ( err ) =>
    {
        //espera a que la conxion con la base de datos termine para no recivir peticiones antes de que esta termine
        const express = require("express");
        const rutas = require("./servidor/rutas/hotel");
        const bodyParser = require("body-parser");
        const http = require('http');
        const dir = require('path');
        const configuracion = require('./servidor/configuracion.json');
        const puerto = configuracion.puerto ;
        const app  = express() ; 
        const helmet = require('helmet');
        const compression = require('compression');

        //diminuye significativamente el tamaño del cuerpo de respuesta y, por lo tanto, aumentar la velocidad de una aplicación web
        app.use(compression());

        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({extended: true}));

        app.use(express.static(dir.join(__dirname, './dist')));

        //Proteje la app de vulnerabilidades estableciendo cabeceras http
        app.use(helmet());

        app.use('/api', rutas);


        app.get('*', (req, res) => 
        {
            res.sendFile(dir.join(__dirname, './dist/index.html'));
        });
        
        const servidor = http.createServer(app);
      
        
        app.listen(puerto, () => { console.log('Corriendo en el puerto'+ puerto );} );
    });

