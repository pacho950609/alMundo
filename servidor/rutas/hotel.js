const express = require('express');
const controladores= require('.././controladores');
const rutas = express.Router();

rutas.get('/hotel',controladores.hotel.hoteles);
rutas.get('/hotel-estrellas/:estrellas',controladores.hotel.filtrarPorEstrellas);
rutas.get('/hotel-nombre/:nombre',controladores.hotel.filtrarPorNombre);
rutas.delete('/hotel/:id',controladores.hotel.eliminar);
rutas.put('/hotel',controladores.hotel.modificar);
rutas.post('/hotel',controladores.hotel.crear);
rutas.get('/imagen/:dir',controladores.hotel.obtenerImagen)


module.exports = rutas ; 