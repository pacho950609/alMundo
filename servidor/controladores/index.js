const fs= require('fs');
const dir= require('path');
const archivos =fs.readdirSync(__dirname);

//importa todos los archivos que se encuentren en los controladores
//para no tener que importar uno a uno cuando sean varios
archivos.forEach((archivo) =>
{
    let nombreArchivo = dir.basename(archivo,'.js')

    if(nombreArchivo !== 'index')
    {
        exports[nombreArchivo] = require('./'+nombreArchivo);

    }
})